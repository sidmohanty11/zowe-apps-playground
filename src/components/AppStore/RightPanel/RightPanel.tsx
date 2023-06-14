import AppList from "./AppList";

const RightPanel = () => {
    return (
        <div style={{
            width: "100%",
            margin: "0 auto",
            overflowY: "scroll",
            paddingBottom: "40px",
        }}>
            <h2 style={{
                color: "#fff",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: 300,
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
                color: "#fff",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: 300,
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
                color: "#fff",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: 300,
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
                color: "#fff",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: 300,
            }}>Most Downloaded</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
            }}>
                <AppList />
            </div>
        </div>
    )

}

export default RightPanel;
