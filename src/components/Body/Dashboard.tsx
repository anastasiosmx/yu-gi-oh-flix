import { CardList } from './Card/CardList';
import styles from './Dashboard.module.css';
import useGetLastPage from '../../hooks/getLastPage';

export const Dashboard = () => {
    const lastPageCounter = useGetLastPage();
    
    return(
        <>
            <div className={styles.DashboardWrapper}>
                <CardList />
            </div>
        </>
    );
}