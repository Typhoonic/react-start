import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { deleteCard, udpateIsFavorite } from '../../redux/cardsRedux';

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

    return (
        <li className={styles.card}>
            {props.children}
            <div>
                <button onClick={handleSubmitFavorite} className={styles.button}><span className={"fa fa-star-o"} /></button>
                <button onClick={handleSubmitDelete} className={styles.button}><span className={"fa fa-trash"} /></button>
            </div>
        </li>
    );
};

export default Card;