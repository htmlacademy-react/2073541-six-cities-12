
import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles['loading-screen']}>
      <div className={styles['loading-spinner']}></div>
      <p className={styles['loading-message']}>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
