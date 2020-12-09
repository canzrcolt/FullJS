btnToWelcome = document.querySelector('.btn')
welcomeBox = document.querySelector('.box')

welcomeBox.addEventListener('click', function(){
    btnToWelcome.scrollIntoView({ behavior: 'smooth' })
})

btnToWelcome.addEventListener('click', function(){
    welcomeBox.scrollIntoView({ behavior: 'smooth' })
})