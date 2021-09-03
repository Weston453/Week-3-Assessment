var resArray = ['Tradition', 'Sapa', 'Porcupine', "East Liberty Taphouse", 'CupBop']

function random(event,) {
    event.preventDefault()
    const randomElement = resArray[Math.floor(Math.random() * resArray.length)]
    console.log(randomElement, resArray[randomElement])

    
    let res = document.createElement('li')
    let resSpan = document.createElement('span')
    resSpan.textContent = "li".value
    res.appendChild(resSpan)
    document.querySelector('ul').appendChild(res)
    res.textContent = randomElement
    function result() {
        setTimeout(() => {
            randomElement.res.add('hide')
        }, 1000)
    }
}

document.querySelector('.random').addEventListener('click', random)