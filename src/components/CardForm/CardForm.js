import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addCard } from '../../redux/store';

const CardForm = props => {

    const dispatch = useDispatch();

    const [content, setContent] = useState({ title: '' });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ id: shortid(), columnId: props.columnId, title: content.title }));
        setContent({ title: '' });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.cartForm}>
            <TextInput value={content.title} onChange={e => setContent({ title: e.target.value })} />
            <Button>Add cart</Button>
        </form>
    );
};

export default CardForm;