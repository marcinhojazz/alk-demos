import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Box from '../components/Box'
import Floor from '../components/Floor'
import OrbitControls from "../components/OrbitControls";
import LightBulb from '../components/LightBulb'
import styles from '../styles/Home.module.css'
import Draggable from '../components/Draggable';
import Arial from ""



function Text3d(){
   const font = new THREE.FontLoader().parse(Arial);
   const textOptions = {
      font,
      size: 5,
      height: 1
   };
   return (
      <mesh>
         <textGeometry attach='geometry' args={['three.js', text Options]} />
         <meshStandardMaterial attach='material' color="hotpink" />
       </mesh>
    )
}

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
          <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          
          <Text3d />
          
          <Draggable>
            <Box rotateX={3} rotateY={0.2} />
          </Draggable>
          
          <OrbitControls />
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}
