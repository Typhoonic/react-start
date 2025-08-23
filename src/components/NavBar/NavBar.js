import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.menu}>
                <span className='fa fa-tasks' />
            </div>
            <div className={styles.about}>
                <a href='/'>Home</a>
                <a href='/favorite'>Favorite</a>
                <a href='/about'>About</a>
            </div>
        </nav>
    );
}

export default NavBar;