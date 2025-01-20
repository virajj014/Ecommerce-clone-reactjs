import React, { useState } from 'react'
import './CountrySelector.css'
import { FaCaretDown } from 'react-icons/fa';
const CountrySelector = () => {
  const [selectedLanguage , setSelectedLanguage] = useState('EN');

  return (
    <div className='languageSelector'>
      <div className='selectedLanguage'>
        <img src='https://flagcdn.com/w320/in.png' alt='' className='flag-icon'
       />
        <p>{selectedLanguage}</p>
        <FaCaretDown/>
      </div>
    </div>
  )
}

export default CountrySelector