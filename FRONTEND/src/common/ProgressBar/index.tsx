// import classes from './ProgressBar.module.css';

// interface ProgressBarProps {
//   value: number;
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {

//   return <div className={classes.progressBar}>
//     <div className={classes.progress} style={{ width: `${value}%` }}></div>
//   </div>
// };

// export default ProgressBar;

import classes from './ProgressBar.module.css';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  from: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, from }) => {
  // console.log("from = ", from + " value = ", value);

  const [width, setWidth] = useState(from);

  useEffect(() => {
    setWidth(value);
  }, [value, from]);

  return <div className={classes.progressBar}>
    <div
      className={classes.progress}
      style={{ width: `${width}%`, transition: 'width 0.3s ease' }}
    ></div>
  </div>
};

export default ProgressBar;
