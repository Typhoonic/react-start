import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid'
import { useParams } from 'react-router-dom';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = useParams();

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ id: shortid(), listId: listId.listId, title, icon }))
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.span}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.span}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;