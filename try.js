//TODO select all the drum elements adn Add event listener
//add animatio when a button is clicked
//play music()


const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)


}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.play()

}
document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})

const makeSound = (key) => {
    switch(key){
        case "w":
            playMusic();
            break;
         case "a":
            playMusic();
            break;
           
         case "s":
            playMusic();
            break;
        case "d":
            playMusic();
            break;
        case "j":
            playMusic();
            break;
        case "k":
            playMusic();
            break;
        case "l":
            playMusic();
            break;
        default:
            console.log("hey, wrong button!!")    
        
              

    }
}
const handleDrumClick = (event) => {
var innerHTML = event.target.innerHTML;

animate(innerHTML);
makeSound(innerHTML)
}
var drums = document.querySelectorAll(".drum")
for(let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', handleDrumClick)
}