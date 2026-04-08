import React from 'react'

const Darkmode = () => {
const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")? localStorage.getItem ("theme") : "light");

    const element = document.documentElement;

    React.useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }
    }, [theme]); 

  return (
    <div className='relative'>
        <h1 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 text-black cursor-pointer
         drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0 " : "opacity-100"}`}>Dark</h1>
        <h1 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 text-white cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300'>Dark</h1>
    
    </div>
  )
}

export default Darkmode;