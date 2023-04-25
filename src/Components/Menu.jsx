import { RoundedBox } from '@react-three/drei'


export default function Menu() {
	return <mesh receiveShadow  scale={[3.1, 6.2, 2]} position-x={0} position-z={-0.25}>
		<RoundedBox><meshStandardMaterial color="#ECE1D2"/></RoundedBox>
	</ mesh>
}