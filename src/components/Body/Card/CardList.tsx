import { Card } from './Card';
import styles from './CardList.module.css';
import useGetCardPage from '../../../hooks/getCards';

export const CardList = (props: any) => {
    let cards =  useGetCardPage(props.pageNumber, props.searchParameter);

    return (
        <>
            {cards.map((card: any) => 
            (   
                <div key={card.id} className={styles.CardList_card}>
                    <Card id={card.id} name={card.name} />
                </div>
            )
            )}
        </>
    );

}