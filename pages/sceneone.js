import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Box from '../components/Box'
import Floor from '../components/Floor'
import OrbitControls from "../components/OrbitControls";
import LightBulb from '../components/LightBulb'
import styles from '../styles/Home.module.css'
import Draggable from '../components/Draggable';
import {Suspense} from "react";

export default function SceneOne() {

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
          
          <Draggable>
            <Suspense fallback={null}>
              <Box rotateX={3} rotateY={0.2} />
            </Suspense>
          </Draggable>
          <OrbitControls />
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}
