import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Creative Coding with P5</h1>
      <nav className={styles.links}>
        <span><Link to={'/polaris'}>Polaris</Link></span>
        <span><Link to={'/boxer'}>Boxer</Link></span>
        <span><Link to={'/counter-rotate'}>Counter Rotate</Link></span>
        <span><Link to={'/shrink'}>Shrink</Link></span>
        <span><Link to={'/fractal-tree'}>Fractal Tree</Link> </span>
        <span><Link to={'/dazed'}>Dazed</Link></span>
        <span><Link to={'/hello-sketch'}>Hello Sketch</Link> </span>
      </nav>
    </div>
  );
}
