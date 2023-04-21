import { Canvas } from "@react-three/fiber"
import Guitar from "./Components/Guitar.jsx"
import Menu from "./Components/Menu.jsx"
import { useRef } from "react"
import gsap from "gsap"
import { Text3D, Text } from '@react-three/drei'



export default function App() {
	const groupRef = useRef()

	const eventHandler = () =>
    {
		gsap.to(groupRef.current.rotation, {
			duration: 0.85,
			y: groupRef.current.rotation.y == 0 ? Math.PI / 2 : 0,
			ease: 'power1.inOut',
		  })
    }
	return   <>
		<span id="logo">3D Flip Menu</span>
		<span id="background-title">3D Flip Menu</span>
		<img src="./frame.png" alt=""/>
		<div className="frame">
				<h3>Product Details</h3>
				<Canvas flat gl={{ antialias: true }}  camera={{ fov: 60, near: 0.1, far: 200 }} onClick={eventHandler}>
				<group ref={ groupRef } rotation-y={0} position={[0,0,-1]}>
				<directionalLight castShadow position={ [ -2, 1, 2 ] } intensity={ 2 } />
        <ambientLight intensity={ 0.5 } />
					<Menu></Menu>
					<Text3D
						font="Montserrat-ExtraBold.json"
						position={[-1.1, 1.9, 0.6]}
						rotation-z={-Math.PI / 2}
						size={ 0.46 }
        				height={ 0.2 }
						// bevelEnabled
						// bevelThickness={ 0.0001 }
						// bevelSize={ 0.01 }
						// bevelOffset={ 0 }
						// bevelSegments={ 5 }
						>
							
            				FENDER
						<meshStandardMaterial color={"#aca597"} />
        			</Text3D>
					<Text3D
						font="Montserrat-Bold.json"
						position={[-1, -2.1, 1]}
						rotation-z={0}
						size={ 0.125 }
						lineHeight={0.8}
						letterSpacing={-0.001}
        				height={ 0.00001 }>
            				Fender{"\n"}
							Jim Adkins {"\n"}
							JA-90
						<meshBasicMaterial color={"#0D0906"} />
        			</Text3D>
					<Guitar />
				</group>
			</Canvas>
		</div>
</>
}