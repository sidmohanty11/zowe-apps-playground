import AppPage from "./AppPage";
import Discover from "./Discover";

const RightPanel = () => {
    return (
        <div style={{
            width: "100%",
            margin: "0 auto",
            overflowY: "scroll",
            paddingBottom: "40px",
        }}>
            {/* <Discover /> */}
            <AppPage />
        </div>
    )

}

export default RightPanel;
