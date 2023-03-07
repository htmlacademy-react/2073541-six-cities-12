import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: not-found</title>
      </Helmet>
      <Logo />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sorry, the page you requested could not be found.</h1>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="/" className="locations__item-link" >
                  <span>Go to the Homepage</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default NotFoundPage;
