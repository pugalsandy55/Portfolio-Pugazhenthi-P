
  const typed = new Typed(".element", options);

        //toggle menu and smooth scrolling
        const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.navlinks');
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElents = document.querySelector('.hero-header')


