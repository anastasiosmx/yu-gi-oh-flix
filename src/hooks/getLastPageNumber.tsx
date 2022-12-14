import { useState, useEffect } from 'react';

export default function useGetLastPageNumber(parameter: string) {
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/data?_page=1"+parameter)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            
            const link = response.headers.get('Link') || "";
            if(link === ''){
               setLastPage(-1);
            }else{
                const lastPageCount = link.substring(link.lastIndexOf('page=')+5, link.lastIndexOf('>;'));
                setLastPage(parseInt(lastPageCount));
            }
            
        })
        .catch((error) => {
            console.error('There has been a problem while fetching last page of API: ', error);
        });
    });
    
    return lastPage;
}