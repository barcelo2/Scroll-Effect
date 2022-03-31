
// ********** set date ************

const date= document.getElementById('date')
date.innerHTML=new Date().getFullYear()

// ********** close links ************

const navToggle=document.querySelector('.nav-toggle')
const linkContainer=document.querySelector('.links-container')
const links=document.querySelector('.links')

navToggle.addEventListener('click', function(){
    containerHeight=linkContainer.getBoundingClientRect().height
    linkHeight=links.getBoundingClientRect().height
    console.log(linkHeight);

    if(containerHeight===0){
      linkContainer.style.height=`${linkHeight}px`  
    }
    else{
       linkContainer.style.height=0
    }
})
// ********** fixed navbar ************
const navbar=document.getElementById('nav')
const topLink=document.querySelector('.top-link')
window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }
    else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
const scrollLink=document.querySelectorAll('.scroll-link')

scrollLink.forEach(function(link){
    link.addEventListener('click',function(e){
      e.preventDefault()
       const id=link.getAttribute('href').slice(1) 
       const element=document.getElementById(id)
       
       const navHeight=navbar.getBoundingClientRect().height
      const containerH=linkContainer.getBoundingClientRect().height
  const navFixed=navbar.classList.contains('fixed-nav')
       let position=element.offsetTop-navHeight

if(!navFixed){
    position=position-navHeight
}

if(navHeight>82){
    position=position+containerH
}
       window.scrollTo(
           {
               left:0,
               top:position,
           }
       )
       linkContainer.style.height=0;
    })
})



