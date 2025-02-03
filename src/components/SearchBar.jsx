import React, { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate()


  const categories = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Pharmacy",
  ]

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    console.log("Category: ", selectedCategory)
    console.log("Search Quesry: ", searchQuery)
    // call your backend api


    if (!searchQuery.trim()) return;
    try {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(res => res.json())
        .then((data) => {
          navigate(`/searchproducts?query=${searchQuery}`, { state: { results: data.products } })
        });
    }
    catch (err) {
      console.error("Error fetching search results:", err);

    }
    // navigate('/searchproducts')
  }
  return (
    <div className='search-bar'>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className='category-dropdown'
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <input value={searchQuery} onChange={handleSearchChange}
        placeholder='Search Amazon.in'
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>
        <IoIosSearch size={20} />

      </button>
    </div>
  )
}

export default SearchBar