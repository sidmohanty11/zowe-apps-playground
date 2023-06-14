const AppPage = () => {
    return (
        <div style={{
            padding: "20px",
            borderBottom: "1px solid #444",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}>
                <img src="/arrow-left.svg" alt="back arrow" style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "4px",
                }} />
                <span style={{
                    color: "#aaa",
                    fontSize: "14px",
                }}>
                    GO BACK
                </span>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                marginLeft: "20px",
            }}><div style={{
                display: "flex",
                alignItems: "center",
            }}>
                    <img src="/1.png" alt="app icon" style={{
                        width: "96px",
                        height: "96px",
                        borderRadius: "10px",
                    }} />
                    <div style={{
                        marginLeft: "20px",
                    }}>
                        <p style={{
                            color: "#aaa",
                            fontSize: "12px",
                            marginBottom: '2px'
                        }}>
                            Publisher
                        </p>
                        <h2 style={{
                            color: "#fff",
                            fontWeight: 300,
                            fontSize: "20px",
                            marginBottom: '10px'
                        }}>App name</h2>
                        <p style={{
                            color: "#aaa",
                            fontSize: "12px",
                            marginBottom: '4px'
                        }}>
                            com.zowe.org
                        </p>
                        <p style={{
                            color: "#aaa",
                            fontSize: "12px",
                            marginBottom: '4px'
                        }}>
                            v0.0.1
                        </p>
                    </div></div>
                <button style={{
                    backgroundColor: "#3162ac",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: 300,
                    height: "40px",
                }}>
                    Install
                </button>
            </div>
        </div>
    )
}

export default AppPage;
