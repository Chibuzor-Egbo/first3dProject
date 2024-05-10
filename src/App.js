import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Building from "./Building";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Building />
        </Suspense>
      </Canvas>
      <div className="container">
        <h1>Built by Chibuzor Egbo</h1>
        <p>3js, three fiber, javascript</p>
      </div>
    </>
  );
}

export default App;
