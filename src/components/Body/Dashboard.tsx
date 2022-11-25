import { CardList } from './Card/CardList';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
    return(
        <>
            <div className={styles.DashboardWrapper}>
                <CardList />
            </div>
        </>
    );
}