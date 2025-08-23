import styles from './NavBar.module.scss';
import { /*Link,*/ NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.menu}>
                <span className='fa fa-tasks' />
            </div>
            <div className={styles.about}>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;