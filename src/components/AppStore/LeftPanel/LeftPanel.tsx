import NavigationButtons from "./NavigationButtons"
import SearchBar from "./SearchBar"

const LeftPanel = () => {
    return (
        <div style={{
            height: "100%",
            padding: "0 10px",
            boxSizing: "border-box",
            borderRight: "1px solid #343434",
            marginTop: "10px",
        }}>
            <SearchBar />
            <NavigationButtons />
        </div>
    )

}

export default LeftPanel;
