import styles from './Card.module.css';

export const Card = ({ name, id }: any) => {
    return(
        <>
            <div className={styles.CardWrapper}>
                <div className={styles.CardWrapper_cardImage}>
                    <img src={`cards_imgs/${id}.jpg`} alt={name} className={styles.CardWrapper_cardImage_size}/>
                </div>
            </div>
        </>
    );
}