
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage/HomePage"
import Catalog from "./Page/CatalogPage/Catalog/Catalog"
import ProductPage from "./Page/ProductPage/ProductPage" 

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage/>}></Route>
				<Route path="/catalog" element={<Catalog/>}></Route>
				<Route path="/catalog/:id" element={<ProductPage/>}></Route>
			</Routes>
		</>
	)
}


export default App
