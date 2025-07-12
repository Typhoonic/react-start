import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';

const CardForm = props => {
    const [content, setContent] = useState({ title: '' });

    const handleSubmit = e => {
        e.preventDefault();
        props.action(content, props.columnId);
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