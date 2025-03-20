import BlueButton from "../../../components/BlueButton/BlueButton"
import Card from "../Card/Card"
import styles from "./Catalog.module.css"
import { products } from "../../../products"
import { product } from "../../../products"

export default function Catalog() {
	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__title}>Каталог товаров</h2>
			<div className={styles.catalog__line}>
				<p>Категории:</p>
				<div className={styles.category}>
					{product.map((product) => (
						<BlueButton text={product.text} type={product.type} />
					))}
				</div>
			</div>
			<div className={styles.wrap}>
				{
                            products.map(products=><Card id={products.id} name={products.name} price={products.price} imagePath={products.imagePath}/>)
                }
			</div>
            <div className={styles.catalog__footer}>
                <BlueButton text={"Загрузить еще товары"} type='btnGrayBig'/>
            </div>
		</div>
	)
}
