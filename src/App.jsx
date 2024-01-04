import "./App.css";
import TopSectionMob from "./Components/TopSectionMob";
import DesktopMod from "./Components/DesktopMod";

function App() { 
  return (
    <>{window.screen.width > '430' ? <DesktopMod /> : <TopSectionMob />}</>
  );
}

export default App;
