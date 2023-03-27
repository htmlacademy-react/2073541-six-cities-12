import { Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';

import styles from './not-found.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <Layout pageTitle='6 cities: not-found'>
      <div className={styles.container}>
        <h1 className={styles.title}>404 Not Found</h1>
        <p className={styles.subtitle}>The page you requested could not be found.</p>
        <Link to="/" className={styles.link}>
          Return to the main page
        </Link>
      </div>
    </Layout>

  );
}

export default NotFoundPage;


