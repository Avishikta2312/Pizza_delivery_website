import React from 'react';
import Pizzas from '../pizzadata';
import Pizza from '../components/pizza.js';

export default function Homepage() {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <div className="row">
        {Pizzas.map((pizza, index) => (
          <div className="col-md-4" key={index}>
            <Pizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}
