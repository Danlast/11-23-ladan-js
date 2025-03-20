import styles from "./BlueButton.module.css"
export default function BlueButton({ value, type, text }) {
	let btn = ""

	switch (type) {
		case "btnBlue":
			btn = styles.btnBlue
			break
		case "btnBlack":
			btn = styles.btnBlack
			break
		case "btnGray":
			btn = styles.btnGray
			break
		case "btnWhite":
			btn = styles.btnWhite
			break
		case "btnBlueSmall":
			btn = styles.btnBlueSmall
			break
		case "btnBlueBig":
			btn = styles.btnBlueBig
			break
		case "btnGrayBig":
			btn = styles.btnGrayBig
			break
		default:
			btn = ""
	}

	return <button className={btn}>{value}{text}</button>
}
