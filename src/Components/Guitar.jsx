import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export default function Guitar() {
	const model = useLoader(GLTFLoader, './jim-atkins.glb')
	model.scene.traverse((child) => {
		child.castShadow = true;
	});
    return <primitive castShadow object={ model.scene } position={[0, 0.25, 1.1]} scale={0.67}/>
}