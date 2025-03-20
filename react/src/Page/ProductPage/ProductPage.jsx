import { useParams } from "react-router-dom";
import BlueButton from "../../components/BlueButton/BlueButton";
import { products } from "../../products";
import style from "../ProductPage/ProductPage.module.css"

export default function ProductPage(){
    const {id} = useParams();
    const product = products.find(product => product.id == id);
    console.log(product.imagePath);

    return(
            <div className={style.product}>
                <div className={style.product__img}>
                    <img src={`/${product.imagePath}`} alt="" />
                </div>
                <div className={style.product__about}>
                    <h2 className={style.product__name}>{product.name}</h2>
                    <div className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt blanditiis reprehenderit. Soluta voluptates dolore natus ex optio. Laboriosam quo maxime unde magni sit voluptates amet? Officiis doloribus minus veritatis.</div>
                    <p className={style.product__price}>{product.price}$</p>
                    <BlueButton text="В корзине" type="btnBlueBig"/>
                </div>
            </div>
    )
}