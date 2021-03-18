import {useDispatch} from 'react-redux'
import {show} from '../actions/recordActions'


const URI = 'http://localhost:5001/records';

const fetchData = async () => {
    const dispatch = useDispatch();
    try {
        const response = await fetch(URI);
        const result = await response.json();
        dispatch(show(result))
    } catch (error) {
        console.error('Error', error.message);
    }
    useEffect(() => {
        
        return () => {
            cleanup
        }
    }, [input])
}
