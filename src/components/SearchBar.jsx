import React, { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate()


  const items = [
    { id: 0, name: 'apple' },
    { id: 1, name: 'phone' },
    { id: 2, name: 'bag' },
    { id: 3, name: 'food' },

  ]


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
  const handleSearchChange = (string, results) => {
    setSearchQuery(string)
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

  const handleSelect = (item) => {
    setSearchQuery(item.name);
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