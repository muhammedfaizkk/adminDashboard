import React, { useEffect } from "react";

const BubbleChart = () => {
  useEffect(() => {
    document.querySelectorAll('.chart-bubble').forEach(bubble => {
      const bubbleSize = bubble.getAttribute('data-value');
      bubble.style.width = bubbleSize * 15 + 'px';
      bubble.style.height = bubbleSize * 15 + 'px';

      const posX = bubble.getAttribute('data-x');
      const posY = bubble.getAttribute('data-y');
      bubble.style.left = posX - bubbleSize * 0.5 + '%';
      bubble.style.bottom = posY - bubbleSize * 0.5 + '%';
    });
  }, []);

  return (
    <div className="chart">
      <div data-value="8" data-label="Wholesale" data-x="30" data-y="70" className="chart-bubble">
        <span className="bubble-label">Wholesale</span>
      </div>
      <div data-value="5" data-label="Retail" data-x="70" data-y="40" className="chart-bubble">
        <span className="bubble-label">Retail</span>
      </div>
      <div data-value="3" data-label="Online" data-x="50" data-y="20" className="chart-bubble">
        <span className="bubble-label">Online</span>
      </div>
      <div data-value="6" data-label="Bulk Orders" data-x="20" data-y="50" className="chart-bubble">
        <span className="bubble-label">Bulk Orders</span>
      </div>

      <div className="lines">
        {[...Array(4)].map((_, i) => (
          <div className="lines-horz" key={i}></div>
        ))}
        {[...Array(4)].map((_, i) => (
          <div className="lines-vert" key={i + 4}></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleChart;
