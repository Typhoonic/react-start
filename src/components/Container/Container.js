import styles from './Container.module.scss';

const Container = props => {
    return (
        <div className={styles.limited}>
            {props.children}
        </div>
    );
};

export default Container;