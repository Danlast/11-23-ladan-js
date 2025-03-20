import { NavLink } from "react-router-dom"
import logo from "../../../public/avtotorgLogo 1.svg"
import BlueButton from "../BlueButton/BlueButton.jsx"
import s from "./Header.module.css"

export default function Header() {
	return (
		<header className={s.header}>
			<div className={s.header__inner}>
				<div className={s.nav}>
					<NavLink to="/" className={`${s.nav__item} nav__item`}>О нас</NavLink>
					<NavLink to="/catalog" className={`${s.nav__item} nav__item`}>каталог</NavLink>
					<NavLink to="/sd" className={`${s.nav__item} nav__item`}>Где нас найти</NavLink>
				</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className={s.buttons}>
					<BlueButton value="Регистрация" type="btnBlack"></BlueButton>
					<BlueButton value="Вход" type="btnBlue"></BlueButton>
				</div>
			</div>
		</header>
	)
}
