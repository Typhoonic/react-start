import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { udpateIsFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch()

    const handleSubmitFavorite = e => {
        e.preventDefault();
        dispatch(udpateIsFavorite(props.id));
    }

    return (
        <li className={styles.card}>
            {props.children}
            <button onClick={handleSubmitFavorite} className={styles.button}><span className={"fa fa-star-o"} /></button>
        </li>
    );
};

export default Card;