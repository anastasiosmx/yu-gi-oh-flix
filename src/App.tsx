import styles from './App.module.css';
import { Dashboard } from './components/Body/Dashboard';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <div className={styles.GridContainer}>
        <div className={styles.GridContainer_header}>
          <Header />
        </div>
        <div className={styles.GridContainer_dashboard}>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
