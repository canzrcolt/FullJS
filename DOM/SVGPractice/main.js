
const oldMoon = "M1154.97 300.704C1207.57 300.704 1250.21 264.104 1250.21 218.956C1250.21 173.807 1207.57 137.208 1154.97 137.208C1102.36 137.208 1059.72 173.807 1059.72 218.956C1059.72 264.104 1102.36 300.704 1154.97 300.704Z"
const oldLineBottom = "M855.55 443.441L902.993 395.772L950.436 348.103L977.218 321.193C978.7 319.704 976.413 317.381 974.932 318.87L927.489 366.539L880.046 414.208L853.263 441.119C851.781 442.607 854.068 444.93 855.55 443.441V443.441Z"
const oldLineTop = "M851.233 233.491L898.676 185.822L946.119 138.152L972.902 111.242C974.383 109.753 972.097 107.43 970.615 108.919L923.172 156.589L875.729 204.258L848.946 231.168C847.465 232.657 849.751 234.98 851.233 233.491V233.491Z"
const oldStar1 = "M1254.22 367.575C1258.36 367.575 1261.72 364.691 1261.72 361.134C1261.72 357.576 1258.36 354.693 1254.22 354.693C1250.07 354.693 1246.71 357.576 1246.71 361.134C1246.71 364.691 1250.07 367.575 1254.22 367.575Z"
const oldStar2 = "M769.29 314.47C773.435 314.47 776.795 311.586 776.795 308.029C776.795 304.471 773.435 301.587 769.29 301.587C765.145 301.587 761.785 304.471 761.785 308.029C761.785 311.586 765.145 314.47 769.29 314.47Z"
const oldStar3 = "M1111.78 336.841L1108.03 340.035L1104.31 336.819L1101.81 338.948L1105.53 342.163L1101.79 345.356L1104.27 347.499L1108.01 344.307L1111.73 347.521L1114.23 345.392L1110.51 342.177L1114.26 338.985L1111.78 336.841Z"
const oldStar4 = "M697.36 401.061L693.614 404.255L689.893 401.039L687.397 403.168L691.116 406.383L687.371 409.577L689.85 411.719L693.597 408.527L697.317 411.741L699.815 409.612L696.094 406.398L699.839 403.205L697.36 401.061Z"
const oldStar5 = "M1070.05 438.111L1066.3 441.305L1062.58 438.089L1060.08 440.218L1063.8 443.433L1060.06 446.627L1062.54 448.769L1066.29 445.577L1070 448.792L1072.5 446.662L1068.78 443.448L1072.53 440.255L1070.05 438.111Z"
const oldStar6 = "M816.793 154.06L813.047 157.254L809.326 154.038L806.829 156.167L810.549 159.382L806.804 162.576L809.283 164.719L813.03 161.526L816.75 164.741L819.248 162.612L815.526 159.397L819.272 156.204L816.793 154.06Z"

const newMoon = "M1153.97 299.704C1206.57 299.704 1249.21 263.104 1249.21 217.956C1249.21 172.808 1206.57 136.208 1153.97 136.208C1101.36 136.208 1058.72 172.808 1058.72 217.956C1058.72 263.104 1101.36 299.704 1153.97 299.704Z"
const newLineBottom = "M831.3 476.39L887.891 415.63L944.481 354.871L976.427 320.571C978.195 318.674 975.467 315.713 973.7 317.611L917.109 378.37L860.519 439.129L828.573 473.429C826.805 475.326 829.533 478.287 831.3 476.389V476.39Z"
const newLineTop = "M689.401 391.909L799.164 283.302L908.926 174.694L970.889 113.384C974.318 109.991 969.027 104.699 965.599 108.091L855.836 216.699L746.074 325.306L684.111 386.616C680.682 390.009 685.973 395.301 689.401 391.909V391.909Z"
const newStar1 = "M1148.5 457.882C1152.65 457.882 1156.01 454.999 1156.01 451.441C1156.01 447.884 1152.65 445 1148.5 445C1144.36 445 1141 447.884 1141 451.441C1141 454.999 1144.36 457.882 1148.5 457.882Z"
const newStar2 = "M620.505 338.882C624.65 338.882 628.01 335.998 628.01 332.441C628.01 328.884 624.65 326 620.505 326C616.36 326 613 328.884 613 332.441C613 335.998 616.36 338.882 620.505 338.882Z"
const newStar3 = "M1029.99 407.022L1026.24 410.216L1022.52 407L1020.03 409.129L1023.75 412.344L1020 415.538L1022.48 417.68L1026.23 414.488L1029.95 417.703L1032.44 415.573L1028.72 412.359L1032.47 409.166L1029.99 407.022Z"
const newStar4 = "M637.989 477.022L634.244 480.216L630.522 477L628.026 479.129L631.746 482.344L628 485.538L630.479 487.68L634.226 484.488L637.946 487.703L640.444 485.573L636.723 482.359L640.469 479.166L637.989 477.022Z"
const newStar5 = "M1006.99 511.022L1003.24 514.216L999.522 511L997.026 513.129L1000.75 516.344L997 519.538L999.479 521.68L1003.23 518.488L1006.95 521.703L1009.44 519.573L1005.72 516.359L1009.47 513.166L1006.99 511.022Z"
const newStar6 = "M692.989 218.022L689.244 221.216L685.522 218L683.026 220.129L686.746 223.344L683 226.538L685.479 228.68L689.226 225.488L692.946 228.703L695.444 226.573L691.723 223.359L695.469 220.166L692.989 218.022Z"

const darkMode = document.querySelector('#darkMode')
const oldyMoon = document.querySelector('.oldMoon')
let toggle = false;

darkMode.addEventListener('click', () => {

    const timeline = anime.timeline({
        duration : 4000,
        easing : "linear",
        loop:true
    })
    oldyMoon.classList.toggle('newMoon')
    timeline.add({
        targets: ".oldLineTop",
        d: [
            toggle ? {value: oldLineTop} : {value: newLineTop}
        ]
    })
    timeline.add({
        targets: ".oldLineBottom",
        d: [
           toggle ? {value: oldLineBottom} : {value: newLineBottom}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar1",
        d: [
           toggle ? {value: oldStar1} : {value: newStar1}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar2",
        d: [
            toggle ? {value: oldStar2} : {value: newStar2}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar3",
        d: [
            toggle ? {value: oldStar3} : {value: newStar3}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar4",
        d: [
            toggle ? {value: oldStar4} : {value: newStar4}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar5",
        d: [
            toggle ? {value: oldStar5} : {value: newStar5}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar6",
        d: [
            toggle ? {value: oldStar6} : {value: newStar6} 
        ]
    },
    "-=4000"
    )
    //To the Back now y'all
    timeline.add({
        targets: ".oldLineTop",
        d: [
            toggle ? {value: newLineTop} : {value: oldLineTop}
        ]
    })
    timeline.add({
        targets: ".oldLineBottom",
        d: [
           toggle ? {value: newLineBottom} : {value: oldLineBottom}
        ]
    },
    "-=4000"
    )
    
    timeline.add({
        targets: ".oldStar1",
        d: [
           toggle ?  {value: newStar1} : {value: oldStar1}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar2",
        d: [
            toggle ?  {value: newStar2} : {value: oldStar2}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar3",
        d: [
            toggle ?  {value: newStar3} : {value: oldStar3}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar4",
        d: [
            toggle ?  {value: newStar4} : {value: oldStar4}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar5",
        d: [
            toggle ?  {value: newStar5} : {value: oldStar5}
        ]
    },
    "-=4000"
    )
    timeline.add({
        targets: ".oldStar6",
        d: [
            toggle ?  {value: newStar6} : {value: oldStar6}
        ]
    },
    "-=4000"
    )
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
})