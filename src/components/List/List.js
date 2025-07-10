import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column columnTitle='Books' iconName='book' />
                <Column columnTitle='Movies' iconName='film' />
                <Column columnTitle='Games' iconName='gamepad' />
            </section>
        </div>
    );
};

export default List;