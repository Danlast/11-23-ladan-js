import img from "../../../public/Banner.png"
import styles from "./Banner.module.css"
import BlueButton from "../BlueButton/BlueButton"
export default function Banner() {
	const banner = {
		height: "100vh",
		
		backgroundImage: `url(${img})`,
		backgroundSize: "100%",
		backgroundRepeat: "no-repeat",
	}

	return (
		<div style={banner}>
			<div className={styles.banner__inner}>
				<BlueButton value="О компании АвтоТорг" type="btnGray" />
			</div>
		</div>
	)
}
