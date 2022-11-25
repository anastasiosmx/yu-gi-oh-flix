import styles from './PageNaviList.module.css';
import useGetLastPageNumber from '../../../hooks/getPages';
import { useState } from 'react';
import { PageNavi } from './PageNavi';

function createNavigationButtons(currentPage: number) {
    let jsxRes: any = [];

    for(let i: number = 1 ; i < (currentPage + 3) ; i++){
        jsxRes.push(<PageNavi pageNumber={i} key={i}/>);
    }
    
    return jsxRes;
}

export const PageNaviList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const lastPageCounter: number = useGetLastPageNumber();

    return(
        <>
            <div className={styles.PageNaviListWrapper}>
                {createNavigationButtons(currentPage)}
                <span className={styles.PageNaviListWrapper_dots}>
                    . . . . . .
                </span>
                <PageNavi pageNumber={lastPageCounter}/>
            </div>
        </>
    );
}