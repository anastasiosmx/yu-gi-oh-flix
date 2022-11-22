import logo from '../../images/yu-gi-oh-logo.png';
import styles from './Header.module.css';

export const Header = () => {
    return(
        <>
            <div className={styles.HeaderWrapper}>
                <img className={styles.HeaderWrapper_logoImg} src={logo} alt="logo" />
                <input type="text" className={styles.HeaderWrapper_searchBar} placeholder='Search for any card using their name... e.g. "Crystal Tree"'/>
            </div>
        </>
    );
}