import { useState, useEffect } from 'react';

export default function useGetCardPage(page: number){
    const [cards, setCards] = useState([]);
    let paramsString = '_page='+page+'&_limit=10';

    const errorResponse: any = [
        {
            "id": "-1",
            "name": "Error while trying to fetch Yu-Gi-Oh Cards"
        }
    ]

    const params = new URLSearchParams(paramsString);

    useEffect(()=>{
        fetch("http://localhost:3001/data?"+params.toString())
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }

            return response.json()
        })
        .then((data: any) => {
            setCards(data);
        })
        .catch((error) => {
            console.error('There has been a problem while fetching Cards: ', error);

            setCards(errorResponse);
        });
    }, [page]);

    return cards;
}