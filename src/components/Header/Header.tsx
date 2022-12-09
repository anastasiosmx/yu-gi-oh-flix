import logo from '../../images/yu-gi-oh-logo.png';
import styles from './Header.module.css';

export const Header = (props: any) => {

    const handleSearch = (event: any) =>{
        if(event.key === 'Enter'){
            let searchParameterAltered = props.searchFilterKeyword+event.target.value;
            props.changeSearchParameter(searchParameterAltered);
        }
    }

    return(
        <>
            <div className={styles.HeaderWrapper}>
                <img className={styles.HeaderWrapper_logoImg} src={logo} alt="logo" />
                <input 
                    type='text'
                    name='search'
                    className={styles.HeaderWrapper_searchBar}
                    placeholder='Search for any set of cards or individual cards e.g. "Crystal Tree"'
                    onKeyDown={event => handleSearch(event)}
                />
                <div className={styles.HeaderWrapper_filters} >
                    <input type='radio' id='freeSearch' value='free' name='filters' />
                    <label htmlFor='freeSearch' className={styles.HeaderWrapper_filters__filterItem}>Free</label>

                    <input type='radio' id='name' value='name' name='filters'/>
                    <label htmlFor='name' className={styles.HeaderWrapper_filters__filterItem}>Name</label>

                    <input type='radio' id='type' value='type' name='filters'/>
                    <label htmlFor='type' className={styles.HeaderWrapper_filters__filterItem}>Type</label>
                </div>
            </div>
        </>
    );
}