// ProgressBar.tsx
import React from 'react';
import styles from './ProgressBar.module.css'; // Make sure to create a CSS module file with this name

interface ProgressBarProps {
  value: number; // value is a number from 0 to 100 representing the percentage of the progress
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
