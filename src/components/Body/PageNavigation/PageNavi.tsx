import styles from './PageNavi.module.css';

export const PageNavi = (props: any) => {
    return(
        <>
            <button className={styles.pageNavi_button}>
                { props.pageNumber }
            </button>
        </>
    );
}