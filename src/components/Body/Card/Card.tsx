import styles from './Card.module.css';

export const Card = ({ name, id }: any) => {
    return(
        <>
            <div className={styles.CardWrapper}>
                <div className={styles.CardWrapper_cardImage}>
                    <div className={styles.CardWrapper_cardImage__front} >
                        <img src={`cards_imgs/${id}.jpg`} alt={name} className={styles.CardWrapper_cardImage_size}/>
                    </div>
                    <div className={styles.CardWrapper_cardImage__back} >
                        <h1>TEST</h1>
                    </div>
                </div>
            </div>
        </>
    );
}