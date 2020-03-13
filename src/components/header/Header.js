import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
      <h1>Creative Coding with P5</h1>
      <nav>
        <span><Link to={'/hello-sketch'}>Hello Sketch</Link> </span>
        <span><Link to={'/fractal-tree'}>Fractal Tree</Link> </span>
        <span><Link to={'/dazed'}>Dazed</Link></span>
        <span><Link to={'/shrink'}>Shrink</Link></span>
      </nav>
    </div>
  );
}
