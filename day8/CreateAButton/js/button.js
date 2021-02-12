const myButton = document.querySelector('#btn')
myButton.addEventListener('click', () => {
    let number = Number.parseInt(myButton.innerText)
    number += 1

    myButton.innerHTML = number
})