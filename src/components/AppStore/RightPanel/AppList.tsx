import Slider from 'react-slick';
import styles from './AppList.module.css';

const trunc = (str, n) => str.length > n ? str.substr(0, n - 1) + '...' : str;

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className={`${styles.sliderArrow} ${styles.nextArrow}`}
        >
            <img src='/arrow-right.svg' width={20} height={20} />
        </div>
    )
}

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className={`${styles.sliderArrow} ${styles.prevArrow}`}
        >
            <img src='/arrow-left.svg' width={20} height={20} />
        </div>
    )
}

const App = ({ name, icon, description, publisher }) => {
    return (
        <div className={styles.appContainer}>
            <img className={styles.appIcon} src={icon} alt={name} />
            <div className={styles.appInfoContainer}>
                <div className={styles.appNameContainer}>
                    <span className={styles.appPublisher}>
                        {publisher}
                    </span>
                    <span className={styles.appName}>{name}</span></div>
                <span className={styles.appDescription}>{trunc(description, 36)}</span>
                <button className={styles.installButton}>
                    <img src='/download.svg' width={12} height={12} style={{
                        marginRight: '4px',
                    }} />
                    Install</button>
            </div>
        </div>
    );
};

const AppList = () => {
    const appsData = [
        { id: 1, name: 'App 1', publisher: 'Publisher', icon: '1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
        { id: 2, name: 'App 2', publisher: 'Publisher', icon: '2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
        { id: 3, name: 'App 3', publisher: 'Publisher', icon: '3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
        { id: 4, name: 'App 1', publisher: 'Publisher', icon: '1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
        { id: 5, name: 'App 2', publisher: 'Publisher', icon: '2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
        { id: 6, name: 'App 3', publisher: 'Publisher', icon: '3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque magna a pulvinar venenatis. Aenean dictum pretium sem, eget fermentum risus lobortis dapibus. Nunc fermentum, urna suscipit malesuada sollicitudin, eros libero volutpat elit, quis venenatis ipsum nibh aliquet purus. Cras in metus consectetur, rutrum nisi eget, porttitor odio. Fusce quis egestas ligula, sed tempor odio. Aliquam erat volutpat. Sed eget pharetra massa. Morbi et convallis diam, id imperdiet justo. Maecenas id commodo felis, vel molestie mi. Nulla facilisi.' },
    ];

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className={styles.appList}>
            <Slider {...settings}>
                {appsData.map((app) => (
                    <App key={app.id} name={app.name} icon={app.icon} description={app.description} publisher={app.publisher} />
                ))}
            </Slider>
        </div>
    );
};

export default AppList;