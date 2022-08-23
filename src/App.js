
import './App.css';
import DeviceCard from './component/Cards/DeviceCard';
import HeaderBanner from './component/headerBannar/HeaderBanner';
import Navi from './component/NavBar/nav';

function App() {
  return (
    <div className="App">

        <Navi></Navi>
        <HeaderBanner></HeaderBanner>
        <DeviceCard></DeviceCard>

    </div>
  );
}

export default App;
