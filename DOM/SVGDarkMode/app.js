const moonPath = "M14 25C14 38.8071 25 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C25 0 14 11.1929 14 25Z"
const sunPath = "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"

const darkMode = document.querySelector('#darkMode')

let toggle = false;

//we need to click on the sun 


darkMode.addEventListener('click', () => {
    //we need to use anime.js
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    })
    //add different animations to the timeline
    timeline
        .add({
            targets: ".sun",
            d: [
                {value: toggle ? sunPath : moonPath}
            ]
        })
        .add({
            targets: "#darkMode",
            rotate: -50
        }, '-= 400')
        .add({
            targets: "section",
            backgroundColor: toggle ? 'rgb(255,255,255' : "rgb(22,22,22)",
            color: toggle ? 'rgb(5,5,5)' : 'rgb(250,250,250)'
            
        }, '-= 500')
        
        //everytime we click on the sun, I want that toggle to switch
        if(!toggle){
            toggle = true;
        }else{
            toggle = false;
        }
})