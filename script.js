// changing navigation style
document.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ("scroll",window.scrollY > 50)
})

const faqs= document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        const icon=faq.querySelector('.faq-icon i');
        if(icon.className==='uil uil-plus-circle'){
            icon.className='uil uil-minus-circle';
        }else{
            icon.className='uil uil-plus-circle';
        }
    })
})

// show hide nav bar
const menu = document.querySelector(".nav-menu");
const openmenubtn = document.querySelector("#open-menu-btn");
const closemenubtn = document.querySelector("#close-menu-btn");

openmenubtn.addEventListener('click', ()=>{
    menu.style.display="flex";
    closemenubtn.style.display="inline-block";
    openmenubtn.style.display='none';
})
closemenubtn.addEventListener('click', ()=>{
    menu.style.display="none";
    closemenubtn.style.display="none";
    openmenubtn.style.display='inline-block';
})