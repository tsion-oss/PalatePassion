
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Shop from './Pages/Shop.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import { Routes, Route } from 'react-router-dom'
import ShopContextProvider, { ShopContext } from './Context/ShopContext.jsx'
import { useContext, useState } from 'react'
import SearchItems from './Pages/SearchItems.jsx'


function App() {

  const { backendAllProduct } = useContext(ShopContext)

   const [searchResults, setSearchResults ] = useState([])
   const [search, setSearch] = useState('')  

   
    
  const handleSearch = (query) => {

    setSearch(query)
    const results = backendAllProduct.filter((product) => 
    product.name.toLowerCase().includes(query.toLowerCase()))
    setSearchResults(results)
    
  }
  const defaultSearch = () => {
    setSearch(search)
  }
  
 
  return (
    <>
    <Navbar
      search={search}
      handleSearch={handleSearch}
      searchResults={searchResults}
      defaultSearch={defaultSearch}
      setSearch={setSearch}
    />
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/search" element={<SearchItems searchResults={searchResults} handleSearch={handleSearch} />} />
      </Routes>
    </ShopContextProvider>
    <Footer />
  </>
  )
}

export default App
