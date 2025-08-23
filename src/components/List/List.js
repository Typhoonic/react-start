import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { getColumnsByList, getListById } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const List = () => {
    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId))

    if (!listData) return <Navigate to="/" />
    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id} {...column} />
                )}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;