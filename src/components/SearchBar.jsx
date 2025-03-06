import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [items, setItems] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5&select=title')
      .then((res) => res.json())
      .then((data) => {
        const productItems = data.products.map((product, index) => ({
          id: index,
          name: product.title,
        }));
        setItems(productItems);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, [])


  const categories = [
    "All",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Pharmacy",
  ]

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchProducts = (query) => {
    fetch(`https://dummyjson.com/products?limit=5&select=title&q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const productItems = data.products.map((product, index) => ({
          id: index,
          name: product.title,
        }));
        setItems(productItems);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }

  const handleSearchChange = (string, results) => {
    setSearchQuery(string);
    fetchProducts(string);
  };




  const handleSearch = () => {
    console.log("Category: ", selectedCategory);
    console.log("Search Query: ", searchQuery);

    if (!searchQuery.trim()) return;
    try {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(res => res.json())
        .then((data) => {
          navigate(`/searchproducts?query=${searchQuery}`, { state: { results: data.products } });
        });
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };


  const handleSelect = (item) => {
    setSearchQuery(item.name);
  }
  return (
    <div className='search-bar'
      onKeyDown={((event) => {
        console.log("enter")
        if (event.key === 'Enter') {
          handleSearch();
        }
      })}
    >
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className='category-dropdown'
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleSearchChange}
        onSelect={handleSelect}
        className='search-bar-container'

        styling={{
          border: 'none',
          outline: 'none',
          height: '40px',
          borderRadius: 'none'
        }}
        showIcon={false}
        placeholder='Search Amazon.in'
        autoFocus
        inputDebounce="100"
        value={searchQuery}
      />
      <button onClick={handleSearch} className='search-button'>
        <IoIosSearch size={20} />

      </button>
    </div>
  )
}

export default SearchBar