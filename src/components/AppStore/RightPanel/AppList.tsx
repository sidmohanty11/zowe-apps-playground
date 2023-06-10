const App = ({ name, icon }) => {
    return (
        <div>
            <img src={icon} alt={name} />
            <span>{name}</span>
        </div>
    );
};

const AppList = () => {
    const appsData = [
        { id: 1, name: 'App 1', icon: 'icon1.png' },
        { id: 2, name: 'App 2', icon: 'icon2.png' },
        { id: 3, name: 'App 3', icon: 'icon3.png' },
    ];

    return (
        <div>
            {appsData.map((app) => (
                <App key={app.id} name={app.name} icon={app.icon} />
            ))}
        </div>
    );
};



export default AppList;
