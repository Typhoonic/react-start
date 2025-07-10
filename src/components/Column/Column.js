import styles from './Column.module.scss';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.iconName} />{props.columnTitle}</h2>
        </article>
    );
};

export default Column;