import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './SearchBar.css'; // Importing our CSS file
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

function SearchBar() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const items = [
    { id: 0, name: 'HTML' },
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Basic' },
    { id: 3, name: 'PHP' },
    { id: 4, name: 'Java' }
  ];

  const categories = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Pharmacy",
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setSearchQuery(string);
  }

  const handleSearch = () => {
    console.log("Category: ", selectedCategory);
    console.log("Search Query: ", searchQuery);

    if (!searchQuery.trim()) return;

    try {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(res => res.json())
        .then((data) => {
          console.log( data.products )
          navigate(`/searchproducts?query=${searchQuery}`, { state: { results: data.products } });
        });
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  // Event handler for item selection in ReactSearchAutocomplete
  const handleSelect = (item) => {
    setSearchQuery(item.name); // Update search query with selected item's name
  };

  return (
    <div className="search-bar">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-dropdown"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleSearchChange} // Update search query while typing
        onSelect={handleSelect} // Set search query to the selected item's name
        showIcon={false}
        className="search-bar-container"
        styling={{
          border: 'none',
          outline: 'none',
          borderRadius: '0',
          height: '40px',
          boxShadow: 'none',
        }}
        placeholder="Search Amazon.in"
        autoFocus
        inputDebounce="500" // Optional: debounce the input for better performance
        value={searchQuery} // Bind the searchQuery to the input value
      />
      <button onClick={handleSearch} className="search-button">
        <IoIosSearch size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
