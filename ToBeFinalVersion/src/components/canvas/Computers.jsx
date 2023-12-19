import React,{ Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; {/* empty canvas to put smth on it */}
import { BakeShadows, OrbitControls, Preload, Shadow, useGLTF } from "@react-three/drei"; {/* to draw on the canvas */}

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh scale={.009}>
      {/* first of, create a light to see smth */}
      <hemisphereLight intensity={5} groundColor="black"/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.65} // is it mobile page? then make size to 0.3. is it not mobile? then make the size tp 0.65
        position={isMobile ? [-100, -20, -140.2] : [-200, -200.25, -310.5]}
        rotation={[-0.01, -1.9, 0]}
      />
    </mesh>
  );
};

{/* Computer component */}
const ComputerCanvas = () => {

  // for responsivity
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      /* camera position [x, y, z], fov for feel of view */
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} /* To only router around a spacific angle */
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;