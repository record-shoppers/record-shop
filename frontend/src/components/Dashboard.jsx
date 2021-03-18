import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GetRecord } from "../fetch/fetch";
import { useDispatch } from "react-redux";
import { show } from "../actions/recordActions";

const Grid = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, auto);
  grid-gap: 3rem;
  justify-content: center;
  padding-top: 3rem;
`;

const GridItems = styled.li`
  width: 300px;
  height: 300px;
  list-style-type: none;
  justify-self: center;
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.recordReducer.data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    try {
      const getData = async () => {
        let res = await GetRecord();
        dispatch(show(res));
        setLoading(false);
      };
      getData();
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  }, []);

  return (
    <FlexWrap>
      <h2>Dashboard</h2>
      <p>Here you can find all our records.</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid>
          {records &&
            records.map((record) => {
              return (
                <GridItems key={record._id}>
                  <GridImage src={record.cover} alt="Record-Cover" />
                </GridItems>
              );
            })}
        </Grid>
      )}
    </FlexWrap>
  );
};

export default Dashboard;
