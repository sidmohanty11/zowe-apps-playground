import Slider from 'react-slick';

const trunc = (str, n) => str.length > n ? str.substr(0, n - 1) + '...' : str;

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                backgroundColor: '#222',
                borderRadius: '50%',
                padding: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
            }}
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
            style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                backgroundColor: '#222',
                borderRadius: '50%',
                padding: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                boxShadow:'0 0 5px 0 rgba(0,0,0,0.5)',
            }}
        >
            <img src='/arrow-left.svg' width={20} height={20} />
        </div>
    )
}

const App = ({ name, icon, description, publisher }) => {
    return (
        <div style={{
            display: "flex",
            width: "90%",
            height: "150px",
            background: "#222",
            borderRadius: "8px",
            padding: "20px",
            margin: '0 auto',
            color: "#fff",
        }}>
            <img style={{
                maxWidth: '48px',
                maxHeight: '48px',
            }} src={icon} alt={name} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                justifyContent: "space-between",
                width: "100%",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                }}>
                    <span style={{
                        fontSize: "12px",
                        color: "#aaa",
                    }}>
                        {publisher}
                    </span>
                    <span style={{
                        fontSize: "14px",
                    }}>{name}</span></div>
                <span style={{
                    fontSize: "12px",
                    color: "#aaa",
                }}>{trunc(description, 36)}</span>
                <button style={{
                    border: "none",
                    borderRadius: "4px",
                    color: "whitesmoke",
                    cursor: "pointer",
                    padding: "6px",
                    background: "#3162ac",
                    fontSize: "12px",
                }}>Install</button>
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
        <div style={{
            width: "90%",
        }}>
            <Slider {...settings}>
                {appsData.map((app) => (
                    <App key={app.id} name={app.name} icon={app.icon} description={app.description} publisher={app.publisher} />
                ))}
            </Slider>
        </div>
    );
};

export default AppList;
