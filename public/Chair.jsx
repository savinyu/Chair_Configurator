import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useCustomisation } from '../src/contexts/Customisation'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./chair.gltf')
  const {material,legs,chairColor,cushionColor} = useCustomisation();

  const leatherTexture = useTexture({
    normalMap: './textures/leather/Leather_Weave_002_normal.jpg',
    roughnessMap: './textures/leather/Leather_Weave_002_roughness.jpg',
    aoMap: './textures/leather/Leather_Weave_002_ambientOcclusion.jpg',
  })

  leatherTexture.normalMap.repeat.set(2,2)
  leatherTexture.roughnessMap.repeat.set(2,2)
  leatherTexture.aoMap.repeat.set(2,2)
  leatherTexture.normalMap.wrapS=leatherTexture.normalMap.wrapT=
  leatherTexture.roughnessMap.wrapS=leatherTexture.roughnessMap.wrapT=
  leatherTexture.aoMap.wrapS=leatherTexture.aoMap.wrapT=
  THREE.RepeatWrapping;

  const fabricTexture = useTexture({
    normalMap: './textures/fabric/Fabric_Lace_022_normal.jpg',
    roughnessMap: './textures/fabric/Fabric_Lace_022_roughness.jpg',
    aoMap: './textures/fabric/Fabric_Lace_022_ambientOcclusion.jpg',
  });

  const woodTexture = useTexture({
    normalMap: './textures/wood/Wood_Wicker_010_normal.jpg',
    roughnessMap: './textures/wood/Wood_Wicker_010_roughness.jpg',
    aoMap: './textures/wood/Wood_Wicker_010_ambientOcclusion.jpg',
  });

  woodTexture.normalMap.repeat.set(2,2)
  woodTexture.roughnessMap.repeat.set(2,2)
  woodTexture.aoMap.repeat.set(2,2)
  woodTexture.normalMap.wrapS=woodTexture.normalMap.wrapT=
  woodTexture.roughnessMap.wrapS=woodTexture.roughnessMap.wrapT=
  woodTexture.aoMap.wrapS=woodTexture.aoMap.wrapT=
  THREE.RepeatWrapping;

  var currentTexture=leatherTexture;
  if(material == 'leather')
    currentTexture=leatherTexture;
  else if(material == 'fabric')
    currentTexture= fabricTexture;
  else
    currentTexture= woodTexture;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}  >
        <meshStandardMaterial {...currentTexture} color={chairColor}/>
      </mesh>
      <mesh geometry={nodes.Cushion.geometry}  position={[0, 0.064, 0.045]} >
        <meshStandardMaterial {...fabricTexture} color={cushionColor}/>
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs}  visible={(legs==1 ? true :false)}/>
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={(legs==2 ? true :false)}/>
    </group>
  )
}

useGLTF.preload('/chair.gltf')
