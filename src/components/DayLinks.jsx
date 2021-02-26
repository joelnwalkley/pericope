import {useParams} from 'react-router-dom';

export const DayLinks = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Hi There!</h1>
            <p>This page is for {id}</p>
        </div>
    )
}
