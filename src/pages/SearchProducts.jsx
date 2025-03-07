import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import './SearchProducts.css'
import ProductCard from '../components/ProductCard'
import { useLocation, useNavigate } from 'react-router-dom'
const SearchProducts = () => {

  const location = useLocation();
  const navigate = useNavigate();


  const searchResults = location.state?.results || [];
  const [query, setQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState(searchResults);
  const [sortOption, setSortOption] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryString = searchParams.get('query');
    setQuery(queryString);
  }, [location.search]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error('Error fetching categories: ', err));

  }, [])

  useEffect(()=>{
    let sorted = [...searchResults];
    if(sortOption == 'lowToHigh'){
      sorted.sort((a,b)=> a.price-b.price);
    }
    else if(sortOption == 'highToLow'){
      sorted.sort((a,b)=> b.price-a.price);
    }

    setSortedProducts(sorted);
  },[sortOption, searchResults])
  const handleCategoryClick = (category) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(
        (data)=>{
          setSortedProducts(data.products);
          navigate(`/searchproducts?query=${category}`, { state: { results: data.products } })
        }
      )
      .catch((err) => console.error('Error fetching categories: ', err));

  }

  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      <div className='productCategories1'>
        {
          categories.map((category, index) => (
            <p key={index} onClick={() => handleCategoryClick(category)}>{category}</p>
          ))
        }
      
      </div>

      <div className='productSort'>
        <p>showing results for "{query}"</p>
        <div style={{ display: "flex", gap: '10px' }}>
          <p>Sort by:</p>
          <select onClick={(e)=> setSortOption(e.target.value)}>
            <option value={""}>
              Featured
            </option>
            <option value={"lowToHigh"}>
              Price: Low to High
            </option>
            <option value={"highToLow"}>
              Price: High to Low
            </option>
          </select>

        </div>
      </div>

      <div className='productList'>
        <div className='left'>
          <h5>Delivery Day</h5>
          <div>
            <input type='checkbox' />
            <p>Get it by today</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Get it by tommorrow</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Get it in 2 Days</p>
          </div>

          <br />
          <br />
          <h5>Installed RAM Size</h5>
          <div>
            <input type="checkbox" />
            <p>Up to 1.9 GB</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>2 to 3.9 GB</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>4 to 5.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>6 to 7.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>8 to 9.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>10 GB & above</p>
          </div>
        </div>
        <div className='right'>
          {
            sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (<ProductCard product={product} key={product.id} />)

              )
            )
              :
              (
                <p>No products found</p>
              )
          }

        </div>

      </div>
    </div>
  )
}

export default SearchProducts