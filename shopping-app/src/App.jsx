import "./App.css"
import {useState} from  "react"
import PropTypes from "prop-types";
import products from "./data.jsx"
import SearchFilter from "./components/SearchFilter/SearchFilter.jsx"
import ProductList from "./components/product/ProductList.jsx"
import SkinCare from "./components/generalbody/SkinCare.jsx"
import { TiShoppingCart } from "react-icons/ti";

const App = () => {
  const [search,setSearch]  = useState("");
  const [category,setCategory] =useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = products.filter((product) => 
  product.name.toLowerCase().includes(search.toLowerCase())
  )

  .filter((product) => (category?product.category === category:true))

  .sort((a,b) =>{
    if (sort ==="price-low") return a.price-b.price;
    if (sort === "price-high") return b.price-a.price;
    if (sort ==="name") return a.name.localeCompare(b.name);
    return 0;
  })
  return(
    <>
<div className="app">

 <h1> Mulungi Cosmetics Shopping app</h1> <div className="icon"><TiShoppingCart className="logo" /></div>
<SearchFilter
search={search} setSearch={setSearch}
category ={category} setCategory={setCategory}
sort = {sort} setSort= {setSort}

/>
< ProductList  products={filteredProducts}/>
</div>

< SkinCare />

</>
  )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default App;
