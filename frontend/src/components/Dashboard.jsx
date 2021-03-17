const Dashboard = () => {

    //! dbRecords needs to replaced with the fetched data which needs to be imported
    /* const recordList = dbRecords.map(record => {
        return (
            <li>
                <img src={record.cover} alt="Record-Cover" />
            </li>
        )
    }); */

    return (
        <>
            <h2>Dashboard</h2>
            <p>Here you can find all our records.</p>
            <ul>
                {/* {recordList} */}
            </ul>
        </>
    )
}

export default Dashboard;