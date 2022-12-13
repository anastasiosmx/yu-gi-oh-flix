import styles from './PageNaviList.module.css';
import useGetLastPageNumber from '../../../hooks/getLastPageNumber';
import { PageNavi } from './PageNavi';

function createNavigationButtons(currentPage: number, changePageHandler: any, lastPageCounter: number) {
    let jsxRes: any = [];

    if(lastPageCounter === -1){
        return jsxRes;
    }

    if(currentPage === 1){
        jsxRes.push(<PageNavi changePageHandler={changePageHandler} lastPageCounter={lastPageCounter} registryFlag={-1} pageNumber={currentPage} key={-1}/>);

        return jsxRes;
    }

    if((currentPage === 2) && (currentPage !== lastPageCounter)){
        jsxRes.push(<PageNavi changePageHandler={changePageHandler} lastPageCounter={lastPageCounter} registryFlag={-4} pageNumber={currentPage} key={-1}/>);

        return jsxRes;
    }

    if(currentPage === lastPageCounter){
        jsxRes.push(<PageNavi changePageHandler={changePageHandler} lastPageCounter={lastPageCounter} registryFlag={-2} pageNumber={currentPage} key={-2}/>);

        return jsxRes;
    }

    if(currentPage === (lastPageCounter - 1)){
        jsxRes.push(<PageNavi changePageHandler={changePageHandler} lastPageCounter={lastPageCounter} registryFlag={-3} pageNumber={currentPage} key={-2}/>);

        return jsxRes;
    }
    
    jsxRes.push(<PageNavi changePageHandler={changePageHandler} lastPageCounter={lastPageCounter} registryFlag={0} pageNumber={currentPage} key={currentPage}/>);
    
    return jsxRes;
}

export const PageNaviList = (props: any) => {
    const lastPageCounter: number = useGetLastPageNumber(props.searchParameter);
    
    return(
        <>
            <div className={styles.PageNaviListWrapper}>
                {createNavigationButtons(props.currentPage, props.changePageHandler, lastPageCounter)}
            </div>
        </>
    );
}