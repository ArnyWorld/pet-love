window.addEventListener("DOMContentLoaded",()=>{

    let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.navigation__menu');
let navBar = document.querySelector('.navigation__listGroup');
let copyText = document.querySelector('.footerBottom__copy');
let goTop = document.querySelector(".goTop");
let year = new Date();


menu.addEventListener("click", showNavBar)
goTop.addEventListener("click",topFunction);

window.addEventListener('scroll',()=>{
    const scrollPX = window.scrollY;
    if(scrollPX > 200){
        goTop.style.display="flex";      
        navigation.classList.add("navigation--scroll");
    }else{
        goTop.style.display="none";
        navigation.classList.remove("navigation--scroll");
    }
});

copyText.innerText = `PetLoves copyright - ${year.getFullYear()}`

function showNavBar(){
    navBar.classList.toggle("navigation__listGroup--active")
}
function topFunction(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
})