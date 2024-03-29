import logo from '../../images/yu-gi-oh-logo.png';
import styles from './Header.module.css';

export const Header = (props: any) => {

    const logoClick = () => {
        window.location.reload();
    }

    const handleSearch = (event: any) =>{
        if(event.key === 'Enter'){
            let userInput = event.target.value.split(" ");

            if(event.target.value !== ""){
                for (let i = 0; i < userInput.length; i++) {
                    userInput[i] = userInput[i][0].toUpperCase() + userInput[i].substr(1);
                }
                userInput = userInput.join(" ");
            }
            
            let searchParameterAltered = props.searchFilterKeyword + userInput;
            props.changeSearchParameter(searchParameterAltered);
        }
    }

    const handleFilter = (event: any) => {
        if(event.target.checked){
            switch (event.target.value) {
                case "free":
                    props.changeSearchFilterKeyword("&q=");
                    break;
                case "name":
                    props.changeSearchFilterKeyword("&name=");
                    break;
                case "type":
                    props.changeSearchFilterKeyword("&type=");
                    break;
            }
        }
    }

    return(
        <>
            <div data-testid="header-1" className={styles.HeaderWrapper}>
                <img className={styles.HeaderWrapper_logoImg} src={logo} alt="logo" onClick={logoClick}/>
                <input 
                    type='text'
                    name='search'
                    className={styles.HeaderWrapper_searchBar}
                    placeholder='Search for any set of cards or individual cards e.g. "Crystal Tree"'
                    onKeyDown={event => handleSearch(event)}
                />
                <div data-testid="header-2" className={styles.HeaderWrapper_filters} >
                    <input type='radio' id='freeSearch' value='free' name='filters' onClick={event => handleFilter(event)} />
                    <label htmlFor='freeSearch' className={styles.HeaderWrapper_filters__filterItem}>Free</label>

                    <input type='radio' id='name' value='name' name='filters' onClick={event => handleFilter(event)}/>
                    <label htmlFor='name' className={styles.HeaderWrapper_filters__filterItem}>Name</label>

                    <input type='radio' id='type' value='type' name='filters' onClick={event => handleFilter(event)}/>
                    <label htmlFor='type' className={styles.HeaderWrapper_filters__filterItem}>Type</label>
                </div>
            </div>
        </>
    );
}