import s from './NavigationButtons.module.css';

const options = [
    {
        id: 1,
        name: "Discover",
        icon: "https://icons8.com/icon/104/star"
    },
    {
        id: 2,
        name: 'On-Premise',
    },
    {
        id: 3,
        name: 'Updates',
    },
    {
        id: 4,
        name: 'Installed',
    },
    {
        id: 5,
        name: 'Settings',
    },
    {
        id: 6,
        name: 'Help',
    },
]

const NavigationButtons = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            {options.map(opt => <button key={opt.id} className={s.optionButton}>{opt.name}</button>)}
        </div>
    );
};

export default NavigationButtons;
