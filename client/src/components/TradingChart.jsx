import React, { useRef, useEffect, useState } from 'react';
import './TradingChart.css';

const TradingChart = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoverData, setHoverData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  // Data generation
  const generateData = () => {
    let price = 4120.50;
    const data = [];
    for (let i = 0; i < 60; i++) {
        const volatility = 4;
        const change = (Math.random() - 0.45) * volatility;
        price += change;
        data.push({
            x: i,
            price: price,
            volume: 20 + Math.random() * 80,
            time: new Date(Date.now() - (60 - i) * 60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        });
    }
    return data;
  };

  const chartData = useRef(generateData());
  const animationRef = useRef(null);
  const targetPriceRef = useRef(chartData.current[chartData.current.length - 1].price);
  const currentPriceRef = useRef(chartData.current[chartData.current.length - 1].price);
  const offsetRef = useRef(0);
  const [displayPrice, setDisplayPrice] = useState(targetPriceRef.current);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Smooth price easing
    const updatePhysics = () => {
      // Move current price towards target
      currentPriceRef.current += (targetPriceRef.current - currentPriceRef.current) * 0.08;
      
      // Update display price (throttled visually through state via requestAnimationFrame if needed, but doing it raw is fine)
      
      // Move chart leftward continuously
      offsetRef.current += 0.8; // pixels per frame
      const dataLength = chartData.current.length;
      const pointSpacing = dimensions.width / (dataLength - 1);
      
      if (offsetRef.current >= pointSpacing) { 
         offsetRef.current = 0;
         chartData.current.shift();
         
         const lastObj = chartData.current[chartData.current.length - 1];
         // Generate new target
         const change = (Math.random() - 0.45) * 6;
         targetPriceRef.current = lastObj.price + change;
         setDisplayPrice(targetPriceRef.current);
         
         chartData.current.push({
           x: lastObj.x + 1,
           price: targetPriceRef.current,
           volume: 20 + Math.random() * 80,
           time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
         });
      }
    };

    const draw = () => {
      updatePhysics();
      
      const width = dimensions.width;
      const height = dimensions.height;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for(let i=1; i<4; i++) {
        const y = (height - 60) * (i/4) + 10;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const data = chartData.current;
      const pointSpacing = width / (data.length - 1);

      // Area below volume
      const vHeightMax = 60;

      data.forEach((pt, i) => {
         const x = i * pointSpacing - offsetRef.current;
         const vHeight = (pt.volume / 100) * vHeightMax;
         const y = height - vHeight;
         
         const prevPrice = i > 0 ? data[i-1].price : pt.price;
         ctx.fillStyle = pt.price >= prevPrice ? 'rgba(20, 184, 166, 0.15)' : 'rgba(236, 72, 153, 0.15)';
         ctx.fillRect(x - (pointSpacing * 0.4), y, pointSpacing * 0.8, vHeight);
      });

      // Find min/max price for scaling
      const visiblePrices = data.map(d => d.price);
      visiblePrices[visiblePrices.length - 1] = currentPriceRef.current;
      
      const padding = 10;
      const minP = Math.min(...visiblePrices) - padding;
      const maxP = Math.max(...visiblePrices) + padding;
      const range = maxP - minP || 1;
      
      const getY = (price) => height - 80 - ((price - minP) / range) * (height - 130);
      
      // Draw line gradient
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#14b8a6');
      gradient.addColorStop(0.5, '#ec4899');
      gradient.addColorStop(1, '#f97316');

      ctx.beginPath();
      data.forEach((pt, i) => {
         // Smooth shifting
         const x = i * pointSpacing - offsetRef.current;
         const p = i === data.length - 1 ? currentPriceRef.current : pt.price;
         const y = getY(p);
         if (i === 0) ctx.moveTo(x, y);
         else {
            const prevX = (i-1) * pointSpacing - offsetRef.current;
            const prevY = getY(i-1 === data.length-1 ? currentPriceRef.current : data[i-1].price);
            const cpX = (x + prevX) / 2;
            ctx.quadraticCurveTo(cpX, prevY, x, y);
         }
      });
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Area fill below line
      ctx.lineTo(width + pointSpacing, height);
      ctx.lineTo(-pointSpacing, height);
      ctx.closePath();
      
      const fillGradient = ctx.createLinearGradient(0, 0, 0, height);
      fillGradient.addColorStop(0, 'rgba(236,72,153,0.15)');
      fillGradient.addColorStop(1, 'rgba(20,184,166,0)');
      ctx.fillStyle = fillGradient;
      ctx.fill();

      // Draw Pulsing Dot at current price (end of line)
      const lastX = (data.length - 1) * pointSpacing - offsetRef.current;
      const lastY = getY(currentPriceRef.current);
      
      ctx.beginPath();
      ctx.arc(lastX, lastY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#f97316';
      ctx.shadowColor = '#f97316';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Add pulsating ring
      const time = Date.now() / 300;
      const ringSize = 6 + (Math.sin(time) + 1) * 4;
      ctx.beginPath();
      ctx.arc(lastX, lastY, ringSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    animationRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationRef.current);
  }, [dimensions]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const data = chartData.current;
    if (!data || data.length === 0) return;
    
    const pointSpacing = dimensions.width / (data.length - 1);
    const index = Math.max(0, Math.min(data.length - 1, Math.round((x + offsetRef.current) / pointSpacing)));
    const pt = data[index];
    
    if (pt) {
       setHoverData({
         x: Math.max(0, Math.min(dimensions.width - 80, x)),
         y: y,
         price: pt.price.toFixed(2),
         time: pt.time
       });
    }
  };

  return (
    <div className="trading-chart-container" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setHoverData(null)}>
      <div className="floating-waves"></div>
      
      <div className="chart-header-overlay">
         <div className="pair-info">
             <span className="pair-nav">BTC/USD</span>
             <span className="live-indicator"><span className="pulse-dot"></span>LIVE</span>
         </div>
         <div className="current-stats">
             <h2>${displayPrice.toFixed(2)}</h2>
             <span className="pnl-green">+1.24%</span>
         </div>
      </div>

      <canvas ref={canvasRef} className="trading-canvas" />
      
      {hoverData && (
        <>
          <div className="crosshair-x" style={{ left: hoverData.x }} />
          <div className="crosshair-y" style={{ top: hoverData.y }} />
          <div className="chart-tooltip glass-panel" style={{ left: Math.min(hoverData.x + 15, dimensions.width - 100), top: Math.max(20, hoverData.y - 50) }}>
             <div className="tt-price">${hoverData.price}</div>
             <div className="tt-time">{hoverData.time}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TradingChart;
