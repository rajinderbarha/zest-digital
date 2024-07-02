import React from 'react';
import classes from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {

  return <div className={classes.progressBar}>
    <div className={classes.progress} style={{ width: `${value}%` }}></div>
  </div>
};

export default ProgressBar;
