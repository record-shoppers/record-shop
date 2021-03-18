import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { show } from '../actions/recordActions'

const Dashboard = () => {
    const records = useSelector((state) => state.recordReducer);
    const { loading, setLoading } = useState(true);
    const dispatch = useDispatch();


    const URI = 'http://localhost:5001/records';

    useEffect(() => {
        fetch(URI)
            .then((response) => response.json())
            .then((data) => dispatch(show(data)))
            .then(() => setLoading(false))
            .catch((err) => {
                // setLoading(false);
                console.log(err);
            })

    }, [URI, dispatch, setLoading]);

    return (
        <>
            <h2>Dashboard</h2>
            <p>Here you can find all our records.</p>
            <ul>
                {!loading ? (records.map(record => {
                    return (
                        <li>
                            <img src={record.cover} alt="Record-Cover" />
                        </li>
                    )
                })) : <h2>Loading...</h2>}
            </ul>
        </>
    )
}

export default Dashboard;