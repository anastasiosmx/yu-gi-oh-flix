import { useState, useEffect } from 'react';

export default function useGetLastPage() {
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        fetch("http://localhost:3001/data?_page=1")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            
            const link = response.headers.get('Link') || "";
            const lastPageCount = link.substring(link.lastIndexOf('page=')+5, link.lastIndexOf('>;'));

            setLastPage(parseInt(lastPageCount));
        })
        .catch((error) => {
            console.error('There has been a problem while fetching last page of API: ', error);
        });
    });

    return lastPage;
}