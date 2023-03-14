import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Phone from '../src/features/3DModels/Phone';
import Hat from '../src/features/3DModels/Hat';

function App() {
  return (
    <div className="App">
      <Profile />
      <Timeline />
    </div>
  );
}

export default App;
