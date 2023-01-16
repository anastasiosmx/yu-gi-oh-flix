import styles from './Card.module.css';

export const Card = ({ name, id, description, race, type }: any) => {
    return(
        <>
            <div className={styles.CardWrapper}>
                <div className={styles.CardWrapper_cardImage}>
                    <div data-testid="card-image" className={styles.CardWrapper_cardImage__front} >
                        <img src={`cards_imgs/${id}.jpg`} alt={name} className={styles.CardWrapper_cardImage_size}/>
                    </div>
                    <div data-testid="card-details" className={styles.CardWrapper_cardImage__back} >
                        <h3 data-testid="card-name" className={styles.CardWrapper_cardImage__back___name}>
                            {name}
                        </h3>

                        <h4 className={styles.CardWrapper_cardImage__back___descriptionHeader}>
                            Description
                        </h4>
                        { description }
                        
                        <h4 className={styles.CardWrapper_cardImage__back___descriptionHeader}>
                            Race
                        </h4>
                        { race }
                        
                        <h4 className={styles.CardWrapper_cardImage__back___descriptionHeader}>
                            Type
                        </h4>
                        { type }
                    </div>
                </div>
            </div>
        </>
    );
}