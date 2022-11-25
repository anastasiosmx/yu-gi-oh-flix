import styles from './PageNavi.module.css';

export const PageNavi = (props: any) => {
    function changePageOnButtonPushHandler(newPageNumber: number){
        props.changePageHandler(newPageNumber);
    }

    function startEndCaseHandler(pageNumber: number, registryFlag: number, lastPageCounter: number){
        let jsxRes: any = [];

        if(registryFlag === -1){
            jsxRes.push(
                <>
                    <button className={styles.pageNavi_button__active}>
                        { pageNumber }
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber + 1)} className={styles.pageNavi_button}>
                        &gt;&gt; { pageNumber + 1}
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(lastPageCounter)} className={styles.pageNavi_button__end}>
                        END { lastPageCounter }
                    </button>
                </>
            );
        }else if(registryFlag === -2){
            jsxRes.push(
                <>
                    <button onClick={() => changePageOnButtonPushHandler(1)} className={styles.pageNavi_button__start}>
                        { 1 } START
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber - 1)} className={styles.pageNavi_button}>
                        { pageNumber - 1} &lt;&lt;
                    </button>
                    <button className={styles.pageNavi_button__active}>
                        { pageNumber}
                    </button>
                </>
            );
        }else if(registryFlag === -3){
            jsxRes.push(
                <>
                    <button onClick={() => changePageOnButtonPushHandler(1)} className={styles.pageNavi_button__start}>
                        { 1 } START
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber - 1)} className={styles.pageNavi_button}>
                        { pageNumber - 1} &lt;&lt;
                    </button>
                    <button className={styles.pageNavi_button__active}>
                        { pageNumber}
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber + 1)} className={styles.pageNavi_button}>
                        &gt;&gt; { pageNumber + 1}
                    </button>
                </>
            );
        }else{
            jsxRes.push(
                <>
                    <button onClick={() => changePageOnButtonPushHandler(1)} className={styles.pageNavi_button__start}>
                        { 1 } START
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber - 1)} className={styles.pageNavi_button}>
                        { pageNumber - 1} &lt;&lt;
                    </button>
                    <button className={styles.pageNavi_button__active}>
                        { pageNumber}
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(pageNumber + 1)} className={styles.pageNavi_button}>
                        &gt;&gt; { pageNumber + 1}
                    </button>
                    <button onClick={() => changePageOnButtonPushHandler(lastPageCounter)} className={styles.pageNavi_button__end}>
                        END { lastPageCounter }
                    </button>
                </>
            );
        }

        return jsxRes;
    }

    return(
        <>
           {startEndCaseHandler(props.pageNumber, props.registryFlag, props.lastPageCounter)}
        </>
    );
}