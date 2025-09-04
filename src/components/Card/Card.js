import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.scss';
import { deleteCard, isFavoriteById, udpateIsFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {

    const dispatch = useDispatch()

    const handleSubmitFavorite = e => {
        e.preventDefault();
        dispatch(udpateIsFavorite(props.id));
    }

    const handleSubmitDelete = e => {
        e.preventDefault();
        dispatch(deleteCard(props.id));
    }

    const isFavorite = useSelector(state => isFavoriteById(state, props.id))

    return (
        <li className={styles.card}>
            {props.children}
            <div>
                <button onClick={handleSubmitFavorite} className={styles.button}><span className={clsx("fa fa-star-o", isFavorite ? styles.active : styles.notActive)} /></button>
                <button onClick={handleSubmitDelete} className={styles.button}><span className={"fa fa-trash"} /></button>
            </div>
        </li>
    );
};

export default Card;