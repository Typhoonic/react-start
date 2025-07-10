import styles from './Container.module.scss';

const Container = props => {
    return (
        <div class={styles.limited}>
            {props.children}
        </div>
    );
};

export default Container;