import AppList from './AppList';

const Discover = () => {
    return (
        <>
        <h2 style={{
            color: "whitesmoke",
            marginTop: "20px",
            fontWeight: 400,
            marginLeft: '40px'
        }}>Popular Apps</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
        }}>
            <AppList />
        </div>
        <h2 style={{
            color: "whitesmoke",
            marginTop: "20px",
            fontWeight: 400,
            marginLeft: '40px'
        }}>Recently Updated</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
        }}>
            <AppList />
        </div>
        <h2 style={{
            color: "whitesmoke",
            marginTop: "20px",
            fontWeight: 400,
            marginLeft: '40px'
        }}>New Releases</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
        }}>
            <AppList />
        </div>
        <h2 style={{
            color: "whitesmoke",
            marginTop: "20px",
            fontWeight: 400,
            marginLeft: '40px'
        }}>Most Downloaded</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
        }}>
            <AppList />
        </div>
        </>
    )
}

export default Discover;
