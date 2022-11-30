import { useState } from 'react';
import styles from './App.module.css';
import { Dashboard } from './components/Body/Dashboard';
import { PageNaviList } from './components/Body/PageNavigation/PageNaviList';
import { Header } from './components/Header/Header';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  
  function changePageHandler(pageNumber: number){
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className={styles.GridContainer}>
        <div className={styles.GridContainer_header}>
          <Header />
        </div>
        <div className={styles.GridContainer_dashboard}>
          <Dashboard  pageNumber={currentPage} />
        </div>
        <div className={styles.GridContainer_pageNavi}>
          <PageNaviList currentPage={currentPage} changePageHandler={changePageHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
