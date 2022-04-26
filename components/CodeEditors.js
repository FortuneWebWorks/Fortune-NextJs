import React from 'react';
import styles from '@/styles/CodeEditors.module.scss';

function CodeEditors() {
  return (
    <div
      id="code-editors"
      style={{
        opacity: '0',
        position: 'absolute',
        zIndex: '-100',
        transition: 'opacity 1s 1s ease-in',
      }}
      className={styles.container}
    >
      <div className={styles.editors_container}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span>index.html</span>
        </div>
        <div id="html"></div>
      </div>
      <div className={styles.editors_container}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>main.css</div>
        <div id="css"></div>
      </div>
    </div>
  );
}

export default CodeEditors;
