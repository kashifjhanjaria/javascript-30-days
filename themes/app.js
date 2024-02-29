const  darkbtn = document.querySelector('.darkbtn')
const lightbtn = document.querySelector('.lightbtn')
const dark = document.querySelector('.dark');
const bodytextdarktheme = document.querySelector('.bodytextdarktheme');
// console.log(dark);
// console.log(dark.classList.contains('dark') );
// console.log(dark.classList.item);
// const THEME = false;

const themeToggle = ( removetheme , addtheme )=>{
        return ()=>{



            if ( dark.className ==="dark" &&  dark.className === removetheme) {
                dark.classList.remove(removetheme)
                dark.classList.add(addtheme);
                document.body.style.color= "black";
                console.log("light");
            
                
                
            }else  if(dark.className === removetheme){
                // if (dark.classList.contains(removetheme)) {
                dark.classList.remove(removetheme)
                dark.classList.add(addtheme);
                document.body.style.color = "white";
               
               
            }
           
        }
}

lightbtn.addEventListener('click' , themeToggle("dark" , "light" ))
darkbtn.addEventListener('click' , themeToggle("light" , "dark"))

