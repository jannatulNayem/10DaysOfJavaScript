const allButtons = document.querySelectorAll('button')

const button5 = document.querySelector("#btn5")
button5.addEventListener('click', () => {
    for(let i = 0; i < allButtons.length; i++){
        changeState(allButtons[i])
    }
})
function changeState(btn){
    if(btn.innerText == "1"){
        btn.innerText = "4"
    }else if(btn.innerText == "2"){
        btn.innerText = "1"
    }else if(btn.innerText == "3"){
        btn.innerText = 2
    }else if(btn.innerText == "6"){
        btn.innerText = "3"
    }else if(btn.innerText == "9"){
        btn.innerText = "6"
    }else if(btn.innerText == "8"){
        btn.innerText = "9"
    }else if(btn.innerText == "7"){
        btn.innerText = "8"
    }else if(btn.innerText == "4"){
        btn.innerText = "7"
    }
}

