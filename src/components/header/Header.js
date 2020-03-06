import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
      <h1>Creative Coding with P5</h1>
      <nav>
        <span><Link to={'/hello-sketch'}>hello-sketch</Link> </span>
        <span><Link to={'/fractal-tree'}>fractal-tree</Link> </span>
      </nav>
    </div>
  );
}
