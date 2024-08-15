import React, { useEffect } from "react";


const BarChart = () => {
  useEffect(() => {
    document.querySelectorAll('.graph-bar').forEach(bar => {
      const dataWidth = bar.getAttribute('data-value');
      bar.style.width = dataWidth + '%';
    });
  }, []);

  return (
    <div className="barGraph">
      <ul className="graph">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
          <span className="graph-barBack" key={index}>
            <li className="graph-bar" data-value={Math.random() * 100}>
              <span className="graph-legend">{day}</span>
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
};

export default BarChart;
