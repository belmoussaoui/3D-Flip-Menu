import { Canvas } from "@react-three/fiber"
import Guitar from "./Components/Guitar.jsx"
import Menu from "./Components/Menu.jsx"

export default function App() {
	return   <>
		<span id="logo">3D Flip Menu</span>
		<span id="background-title">3D Flip Menu</span>
		<img src="./frame.png" alt=""/>
		<div className="frame">
			<Canvas flat id="canvas" gl={{ antialias: true }}>
				<group>
					<Menu></Menu>
					<Guitar />
				</group>
			</Canvas>
		</div>
</>
}