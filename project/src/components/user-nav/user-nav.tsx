import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../store/user-slice/user-slice-selectors';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';


function UserNav(): JSX.Element {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getIsAuthorized);
  const userData = useAppSelector(getUserData);

  return (

    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{userData?.email}</span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#" onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>

  );
}

export default UserNav;

