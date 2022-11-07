import React from "react";

import './dimitryVisual.sass'

const DomitryVisual = () => {
  return (
    <section className="domitry-visual">
      <h2 className="domitry-visual__header">
        Визуализация данных об общежитии
      </h2>
      <div className="domitry-visual__info">
        <div className="domitry-visual__circles">
          <span className="domitry-visual__circle">540</span>
          <span className="domitry-visual__circle">479</span>
          <span className="domitry-visual__circle">61</span>
        </div>
        <div className="domitry-visual__legend">
          <span className="domitry-visual__legend-item">всего</span>
          <span className="domitry-visual__legend-item">занято</span>
          <span className="domitry-visual__legend-item">свободно</span>
        </div>
      </div>
    </section>
  );
};

export default DomitryVisual;
