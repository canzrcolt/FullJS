
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)){
            callback(e)
            console.log(e)
        } 
    })
}

addGlobalEventListener('click', 'span', e => console.log('hiiii'))
addGlobalEventListener('click', 'div', e => console.log('hiiii'))
addGlobalEventListener('click', 'body', e => console.log('hiiii'))