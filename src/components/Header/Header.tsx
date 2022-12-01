import logo from '../../images/yu-gi-oh-logo.png';
import styles from './Header.module.css';

export const Header = (props: any) => {

    const handleSearch = (event: any) =>{
        if(event.key === 'Enter'){
            let searchParameterAltered = "&q="+event.target.value;
            props.changeSearchParameter(searchParameterAltered);
        }
    }

    return(
        <>
            <div className={styles.HeaderWrapper}>
                <img className={styles.HeaderWrapper_logoImg} src={logo} alt="logo" />
                <input 
                    type="text"
                    name='search'
                    className={styles.HeaderWrapper_searchBar}
                    placeholder='Search for any set of cards or individual cards using their name, type e.t.c. Example: "Crystal Tree"'
                    onKeyPress={event => handleSearch(event)}
                />
            </div>
        </>
    );
}