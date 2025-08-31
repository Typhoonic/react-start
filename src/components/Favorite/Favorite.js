import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
    let cards = useSelector(state => getFavoriteCards(state))

    return (
        <div className={styles.wrapper}>
            <PageTitle>FAVORITE</PageTitle>

            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} id={card.id}>{card.title}</Card>)}
                </ul>
            </article >
        </div>
    )
}

export default Favorite;