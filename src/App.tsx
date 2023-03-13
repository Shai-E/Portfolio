import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Hat from '../src/features/3DModels/Hat';

function App() {
  return (
    <div /* style={{ height: '1500px', width: '100%', backgroundColor: 'red' }} */ className="App">
          {/* <Canvas>
            <mesh>
      <Stage environment={'city'} intensity={0.6}>
        <Hat />
        </Stage>
      <OrbitControls autoRotate={false} enableZoom={false} />
      </mesh>
    </Canvas> */}
      <Profile />
      <Timeline />
    </div>
  );
}

export default App;
