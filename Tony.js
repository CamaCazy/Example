 const menuBTN = document.getElementById("menu-btn")
 const navLinks = document.getElementById("menu-btn")
 const menuBTNIcon = menuBTN.querySelector("i")


 menuBTN.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("opens")
    menuBTNIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line")
 }) 