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

