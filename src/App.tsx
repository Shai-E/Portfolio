import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Timeline />
    </div>
  );
}

export default App;
