import { useState, useEffect } from 'react';

const useToday = () => {
    const [today, setToday] = useState('')

    useEffect(() => {
        let day = new Date();
        const dd = String(day.getDate()).padStart(2, '0');
        const mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = day.getFullYear();

        day = mm + '/' + dd + '/' + yyyy;

        setToday(day)
    },[])

    return today
}

export default useToday