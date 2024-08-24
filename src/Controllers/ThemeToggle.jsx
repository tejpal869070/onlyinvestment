import React, { useState, useEffect } from 'react';
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";



const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)} 
    >
      {darkMode ? (
        <p className='flex items-center gap-4'>Switch To Light <IoSunny size={16} color='white' /></p>
      ) : (
        <p className='flex items-center gap-4'>Switch To Dark <MdDarkMode size={16} /></p>
      )}
    </button>
  );
};

export default ThemeToggle;
