export default function Guitar() {
	return <mesh scale={[1, 3, 1]} position-y={-0.2}>
		<boxBufferGeometry/>
		<meshBasicMaterial color="red" />
	</ mesh>
}