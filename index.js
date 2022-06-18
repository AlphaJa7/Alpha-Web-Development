const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtntimes = document.querySelector('.times');
const toggleBtnBars = document.querySelector('.bars');

const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');


 // getBoundaryClientReact();

function toggleIcons(){
    const LinksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    if(LinksContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtntimes.style.display = "block"
        toggleBtnBars.style.display = "none"
    }
    else if(LinksContainerHeight === navContainerHeight){
        linksContainer.style.height = 0;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }    
}
toggleBtnIcons.addEventListener('click', toggleIcons);


const mySelf = document.querySelector('.my-self');
const switchBtn = document.querySelector('.switch-btn');
const playBall = document.querySelector('.play');
const stopBall = document.querySelector('.pause');


playBall.addEventListener('click', () => myfunction('play'));
stopBall.addEventListener('click', () => myfunction('stop'));

const myfunction = (state) => {

    if(state === 'play'){
        mySelf.classList.add('animate');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    }
    else if(state === 'stop'){
        mySelf.classList.remove('animate');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    }
}
const scrollLink = document.querySelector('.scroll-link');
window.addEventListener('scroll', function (){
    const topLink = window.pageYOffset;
    if(topLink > 500){
        scrollLink.classList.add('show-link');
    }else{
        scrollLink.classList.remove('show-link');
    }
});
