//add Event listener
//animate buttons
//play song()

const animate = (key) => {
    const currentValue = document.querySelector(`.${key}`);
    currentValue.classList.add('pressed');
    setTimeout(() => {
        currentValue.classList.remove('pressed');

    },250)
}

document.addEventListener('keypress', (event) => {
const triggeredKey = event.key
animate(triggeredKey);
makeSound(triggeredKey);})

const playMusic = (path) => {
    const audio = new audio(path)
    audio.play()
}

const makeSound = () => {
    switch(key) {
        case 'w':
            playMusic();
            break;
        case 'a':
            playMusic();
            break;
        case 's':
            playMusic();
            break;
        case 'd':
            playMusic();
            break;
        case 'j':
            playMusic();
            break
        case 'k':
            playMusic();
            break
        case 'l':
            playMusic();
            break         
        default:
            console.log('Hey, wrong button')

    }
}




const handleDrumClick = (event) => {
    const innerHTML = event.target.innerHTML
    animate(innerHTML);
    makeSound(innerHTML)
}

var drums = document.querySelectorAll('.drums')
for(let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', handleDrumClick)
}