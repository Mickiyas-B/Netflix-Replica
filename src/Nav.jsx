import React,{useEffect,useState} from 'react'
import './nav.css'
const Nav = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		})
	},[])
    return (
			<div className={`nav ${show && "nav__black"}`}>
				<img
					className="nav__logo"
					src="https://th.bing.com/th/id/R.4d30a09d38e6dfe3feaa31920a680108?rik=GnWkgmKvj5nwNg&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2016_09%2f76248820160921034356.jpg&ehk=grD%2fdqb%2b43FMvO3KHmAdPwgUvOikuZkwrJQwMPdCHUM%3d&risl=&pid=ImgRaw&r=0"
					alt="Netflix Logo"
				/>
				<img
					src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
					alt="Avatar logo"
					className="nav__avatar"
				/>
			</div>
		);
}

export default Nav