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
      {/* <div style={{width: 1200, height: 600}}>

          <Canvas>
      <Stage environment={'city'} intensity={0.6}>
        <Phone />
        </Stage>
      <OrbitControls autoRotate={false} enableZoom={false} />
    </Canvas>
      </div> */}
      <Profile />
      <Timeline />
    </div>
  );
}

export default App;
