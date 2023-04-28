import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export default function Guitar() {
	const model = useLoader(GLTFLoader, './jim-atkins.glb')
	model.scene.traverse((child) => {
		child.castShadow = true;
	});
    return <primitive castShadow object={ model.scene } position={[0, 0.25, 1.1]} scale={0.67}/>
	// return <primitive castShadow object={ model.scene } position={[-2.6, -0.8, 1.8]} scale={3.5}/>
	// return <mesh scale={[0.9, 1.3, 0.1]} position-x={0} position-y={-0.8} position-z={1}>
	// 	<boxBufferGeometry/>
	// 	<meshBasicMaterial color="red" />
	// </ mesh>
}