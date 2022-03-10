const app = (function(){

    // swiper js (testimonial section)
    const swiper = new Swiper('.swiper', {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });


    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const menu = document.querySelector('nav .container ul');
    const navItems = menu.querySelectorAll('li');
    const readMoreBtn = document.querySelector('.read-more');
    const readMoreContent = document.querySelector('.read-more-content');
    const skillItems = document.querySelectorAll('section.skills .skill');

    // to show menu

    menuBtn.addEventListener("click", () => {
      menu.style.display = 'block';
      menuBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
    });


    // to hide menu

    closeBtn.addEventListener("click", () => {

      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';


    });


    // to add the active on clicked nav item


    const changeActiveItem = () =>{
      navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
      });
    }

    navItems.forEach(item => {
      const link = item.querySelector('a');
      link.addEventListener("click", () => {
      changeActiveItem();
      link.classList.add('active');
      })

    });


    // read more button


    readMoreBtn.addEventListener("click", () =>{
    readMoreContent.classList.toggle('show-content')

    if(readMoreContent.classList.contains('show-content')){
      readMoreBtn.textContent = 'Show less'
    } else {
      readMoreBtn.textContent = 'Show more'
    }
    })




    // show or hide skill items

    skillItems.forEach(skill => {
      skill.querySelector('.head').addEventListener("click", () => {
        skill.querySelector('.items').classList.toggle('show-items');
      })
    })


    // add box shadow on scroll

    window.addEventListener("scroll", () =>{
      document.querySelector("nav").classList.toggle('show-box-shadow', window.scrollY > 0)
    })









}())