import { CardList } from './Card/CardList';
import styles from './Dashboard.module.css';

export const Dashboard = (props: any) => {
    return(
        <>
            <div className={styles.DashboardWrapper}>
                <CardList pageNumber={props.pageNumber} searchParameter={props.searchParameter} />
            </div>
        </>
    );
}