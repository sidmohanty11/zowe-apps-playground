import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import s from "./AppStore.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppStore = () => {
    return (
        <div className={s.appStoreContainer}>
            <LeftPanel />
            <RightPanel />
        </div>
    );
};




export default AppStore;
