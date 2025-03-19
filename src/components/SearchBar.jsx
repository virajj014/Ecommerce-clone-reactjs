import React, { useCallback, useEffect, useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5&select=title')
      .then(res => res.json())
      .then((data) => {
        const productItems = data.products.map((product, index) => ({
          id: index,
          name: product.title
        }));

        setItems(productItems);
      })
      .catch((err) => console.error('Error fertching products: ', err));
  }, [])


  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error('Error fetching categories: ', err));

  }, [])





  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }



  const fetchProducts = (query) => {
    if (!query.trim()) return;

    fetch(`https://dummyjson.com/products/search?q=${query}&limit=5&select=title`)
      .then(res => res.json())
      .then((data) => {
        const productItems = data.products.map((product, index) => ({
          id: index,
          name: product.title
        }));
        console.log(productItems);
        setItems(productItems);
      });

  }


  const handleSearchChange = (string, results) => {
    console.log(string);
    setSearchQuery(string)
    fetchProducts(string);
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
          if (selectedCategory.length > 1 &&  selectedCategory.toLocaleLowerCase() != 'all'){
            const prod = data.products.filter((product) => product.category === selectedCategory.toLowerCase());
            navigate(`/searchproducts?query=${searchQuery}`, { state: { results: prod } });

          }
          else {
            navigate(`/searchproducts?query=${searchQuery}`, { state: { results: data.products } })

          }
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
    <div className='search-bar'
      onKeyDown={((event) => {
        if (event.key == "Enter") {
          handleSearch();
        }
      })}
    >
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className='category-dropdown'
      >
        <option value={""}>All</option>
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