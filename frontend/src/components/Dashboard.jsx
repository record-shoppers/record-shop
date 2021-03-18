import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { show } from '../actions/recordActions'
import styled from 'styled-components'


const Dashboard = () => {
    const records = useSelector((state) => state.recordReducer);
    const { loading, setLoading } = useState(true);
    const dispatch = useDispatch();
    
    const Grid = styled.ul`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, auto);
        grid-gap: 3rem;
        justify-content: center;
        padding-top: 3rem;
    `

    const GridItems = styled.li`
        width: 300px;
        height: 300px;
        list-style-type: none;
        justify-self: center;
    `

    const GridImage = styled.img`
        width: 100%;
        height: 100%;
    `
    const FlexWrap = styled.div`
        display: flex;
        flex-direction: column;
    `

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
            <FlexWrap>
                <h2>Dashboard</h2>
                <p>Here you can find all our records.</p>
                    <Grid>
                        {!loading ? (records && records.map(record => {
                            return (
                                <GridItems>
                                    <GridImage src={record.cover} alt="Record-Cover" />
                                </GridItems>
                            )
                        })) : <h2>Loading...</h2>}
                    </Grid>
            </FlexWrap>
    )
}

export default Dashboard;