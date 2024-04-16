import { MeshReflectorMaterial, OrbitControls} from "@react-three/drei"
import { Suspense } from 'react'
import Chair from '../../public/Chair.jsx'

export default function Experience(){
    return <>
            
            <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI/2.05} minPolarAngle={Math.PI/4}/>

            <ambientLight intensity={2}/>
            <directionalLight position={[0,5,5]} intensity={10}/>

            <color attach={'background'} args={['#121212']} />
            <fog attach="fog" color={'#121212'} near={1} far={20}/>

            <mesh position={[0,.1,0]} visible={false}>
                <boxGeometry/>
                <meshNormalMaterial />
            </mesh>
                 
            <mesh position={[0,0,0]} rotation={[-Math.PI/2,0,0]} scale={50}>
                <planeGeometry/>
                <MeshReflectorMaterial
                    // roughness={0.5}
                    metalness={0.1}
                    color='#aaaaaa'
                    blur={[1000,1000]}
                    resolution={1024}
                    mixBlur={1}
                    depthScale={1.5}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    mirror={0.9}
                    />
            </mesh>

            <Suspense fallback={null} >
                <Chair  />
            </Suspense>

        </>
};