import BlueButton from "../../../components/BlueButton/BlueButton"
import styles from "./Card.module.css"
import { Link } from "react-router-dom";  

export default function Item(props) {
	return (
		<>
			<div className={styles.catalog}>
				<div>
					<img src={props.imagePath} alt="#" />
				</div>
                <div className={styles.content}>
                    <p className={styles.text}>{props.name}</p>
                    <div className={styles.footer}>
                        <h3 className={styles.price}>{props.price}₽</h3>
						<Link to={`/catalog/${props.id}`}>
                			<BlueButton text={"Подробнее"} type="btnBlueBig"/>
            			</Link>
                    </div>
                </div>
			</div>
		</>
	)
}
