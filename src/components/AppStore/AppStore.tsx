import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import s from "./AppStore.module.css";

const AppStore = () => {
    return (
        <div className={s.appStoreContainer}>
            <LeftPanel />
            <RightPanel />
        </div>
    );
};




export default AppStore;
