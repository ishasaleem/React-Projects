 import React,{useState,useEffect} from 'react'
import Blog from './Blog'
import { themecontext,themes } from './Context/Theme-context';
function LightAndDarkMode() {
    const [theme,setTheme]=useState(themes.light);
    function changeTheme(){
        theme===themes.light?setTheme(themes.dark):setTheme(themes.light)
    }

    let docbody = document.body;
    
    useEffect(() => {
       
        docbody.classList.remove("bg-light", "text-light", "bg-dark", "text-dark");
        
        switch (theme) {
            case themes.light:
                docbody.classList.add("bg-dark");
                docbody.classList.add("text-light");
                break;
            case themes.dark:
                docbody.classList.add("bg-light");
                docbody.classList.add("text-dark");
                break;
            default:
                break;
        }
    }, [theme]);
    
  return (
    <themecontext.Provider value={{theme,changeTheme}}>
        <Blog theme={theme}/>
        </themecontext.Provider> 
  )
}

export default LightAndDarkMode