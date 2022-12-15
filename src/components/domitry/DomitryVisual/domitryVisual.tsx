import React, { FC } from "react";
import "./dimitryVisual.sass";

interface DomitryVisualProps {
  all: number;
  buzy: number;
}

const DomitryVisual: FC<DomitryVisualProps> = ({ all, buzy }) => {
  return (
    <section className="domitry-visual">
      <h2 className="domitry-visual__header">
        Визуализация данных об общежитии
      </h2>
      <div className="domitry-visual__info">
        <div className="domitry-visual__circles">
          <span className="domitry-visual__circle">{all}</span>
          <span className="domitry-visual__circle">{all - buzy}</span>
          <span className="domitry-visual__circle">{buzy}</span>
        </div>
        <div className="domitry-visual__legend">
          <span className="domitry-visual__legend-item">всего</span>
          <span className="domitry-visual__legend-item">свободно</span>
          <span className="domitry-visual__legend-item">занято</span>
        </div>
      </div>
    </section>
  );
};

export default DomitryVisual;
