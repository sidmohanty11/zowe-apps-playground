import Window from './components/Window';
import AppStore from './components/AppStore/AppStore';
import './App.css';

function App() {
  return (
    <div className="app">
      <Window>
        {/* content here is the React App that you ship! */}
        <AppStore />
      </Window>
    </div>
  );
}

export default App;
