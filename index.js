//get navbar element
const navbar = document.querySelector('nav');

//if scroll position is 0, background color is transparent
document.querySelector('body').onscroll = () => {
    if(window.scrollY <  5) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)';
        
    } else {
        navbar.style.backgroundColor = 'rgba(0,0,0,.5)';
    }
}
//if scroll position is not 0, background color is black with opacity