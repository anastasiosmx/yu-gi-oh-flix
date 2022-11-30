import logo from '../../images/yu-gi-oh-logo.png';
import styles from './Header.module.css';
import { useState } from 'react';

export const Header = () => {
    const [searchParameter, setSearchParameter] = useState('');

    const handleSearch = (event: any) =>{
        setSearchParameter(event.target.value);
    }

    return(
        <>
            <div className={styles.HeaderWrapper}>
                <img className={styles.HeaderWrapper_logoImg} src={logo} alt="logo" />
                <input 
                    type="text"
                    name='search'
                    className={styles.HeaderWrapper_searchBar}
                    placeholder='Search for any card using their name... e.g. "Crystal Tree"'
                    onChange={event => handleSearch(event)}
                    value={searchParameter}
                />
            </div>
        </>
    );
}