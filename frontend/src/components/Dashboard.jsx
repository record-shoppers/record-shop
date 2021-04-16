import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GetRecord } from "../helpers/fetch";
import { useDispatch } from "react-redux";
import { show } from "../actions/recordActions";
import { addItem } from "../actions/basketActions";
import { setItemInStoreage } from "../helpers/localStoreage";

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  margin: 10px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, auto);
  grid-gap: 4rem;
  justify-content: center;
  padding-top: 4rem;
`;

const GridItems = styled.div`
  box-shadow: 1px 1px 2px 1px #727272;
  position: relative;
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: black;
  color: white;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.recordReducer.data);
  const user = useSelector((state) => state.loginReducer.user);

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

  const orderHandler = (record) => {
    dispatch(addItem(record));
  };

  return (
    <FlexWrap>
      <h3>Dashboard</h3>
      <p>Hello, {user.nickname}. Here you can find all our records.</p>

      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid>
          {records &&
            records.map((record) => {
              return (
                <GridItems key={record._id}>
                  <GridImage src={record.cover} alt="Record-Cover" />
                  <Button onClick={() => orderHandler(record)}>+</Button>
                </GridItems>
              );
            })}
        </Grid>
      )}
    </FlexWrap>
  );
};

export default Dashboard;
