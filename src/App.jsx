import { Canvas } from "@react-three/fiber"
import Guitar from "./Components/Guitar.jsx"
import Menu from "./Components/Menu.jsx"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Text3D } from '@react-three/drei'
import Cursor from "./Components/Cursor.jsx"



export default function App() {
	const detailsRef = useRef()
	const burgerRef = useRef()
	const groupRef = useRef()
	const listRef = useRef()
	const listRef2 = useRef()
	let test = false;
	let side = 0;
	let isClick = false;

	const onPointerDown =(event) => {
		isClick = true;
	}

	const onPointerUp =(event) => {
		isClick = false;
	}

	const onPointerMove = (event) => {
		if (!isClick) return
		if (!side && event.movementX > 3)
			eventHandler();
		if (side && event.movementX < -3)
			eventHandler();
		event.stopPropagation();
	};

	const eventHandler = () =>
    {
		if (test) return
		side = (side + 1) % 2;
		test = true;
		detailsRef.current.classList.toggle("move");
		burgerRef.current.classList.toggle("move2");

		if (listRef.current.style.transform == "rotateY(0deg)")
		{
			listRef.current.style.transform = "rotateY(90deg)";
			listRef2.current.style.transform = "rotateY(90deg)";

		}
		else
		{
			setTimeout(() => {
				listRef.current.style.transform = "rotateY(0deg)";
				listRef2.current.style.transform = "rotateY(0deg)";
			}, 300);
		}
		gsap.to(groupRef.current.rotation, {
			duration: 0.85,
			y: groupRef.current.rotation.y == 0 ? Math.PI / 2 : 0,
			ease: 'power1.inOut',
			onComplete: () => {test = false; isClick = false;},
		  })
    }
	return   <>
		<Cursor ></Cursor>
		<span id="logo">3D Flip Menu</span>
		<span id="background-title">3D Flip Menu</span>
		<span id="year">2023</span>
		<span id="tuto">Click on the triple bar<br></br>or slide to left/right</span>
		<span id="credit">Sketch by Minh Pham<br></br>Code by Bilal El Moussaoui</span>
		<img id="phone" src="./frame.png" draggable="false"/>
		<div className="frame">
				<Canvas shadows onPointerMove={onPointerMove} onPointerDown={onPointerDown} onPointerUp={onPointerUp} flat gl={{ antialias: true }}  camera={{ fov: 60, near: 0.1, far: 200 }}>
				<directionalLight color={"#FDF2E3"} castShadow position={ [ 0, 2.8, 3 ] } intensity={ 0.8 } />
				<group ref={ groupRef } rotation-y={0} position={[0,0,-1]}>
        		<ambientLight intensity={ 0.5 } />
					<Menu></Menu>
					<Text3D
						font="Montserrat-ExtraBold.json"
						position={[-1.1, 1.9, 0.6]}
						rotation-z={-Math.PI / 2}
						size={ 0.46 }
        				height={ 0.2 }
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
					{/* <Text3D
						rotation-y={-Math.PI/2}
						font="Montserrat-Bold.json"
						position={[-1.6, 0.75, -1]}
						rotation-z={0}
						size={ 0.12 }
						lineHeight={1.4}
						letterSpacing={-0.005}
        				height={ 0.00001 }>
            				GUITARS{"\n"}
							BASSES{"\n"}
							AMPS{"\n"}
							PEDALS{"\n"}
							OTHERS{"\n"}
						<meshBasicMaterial color={"#0D0906"} />
        			</Text3D> */}
					<Guitar />
				</group>
			</Canvas>
			
			<div id="instruments" ref={listRef}>
				<ul>
					<li>Guitars</li>
					<li>Basses</li>
					<li>Amps</li>
					<li>Pedals</li>
					<li>Others</li>
				</ul>
			</div>
			<div id="about" ref={listRef2}>
				<ul>
					<li>About</li>
					<li>Support</li>
					<li>Terms</li>
					<li>Faqs</li>
				</ul>
			</div>			
			<div id="hamburger" onClick={eventHandler} ref={burgerRef}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h3  ref={detailsRef} onClick={eventHandler}>Product Details</h3>
			</div>

		</>
}