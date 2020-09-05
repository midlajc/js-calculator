let displayVlaue
let operator
let operatorActionCount=0   

//button Click
document.getElementById("clear").addEventListener("click",clear)
document.getElementById("clear").addEventListener("click",clear)
document.getElementById("one").addEventListener("click",oneClicked)
document.getElementById("two").addEventListener("click",twoClicked)
document.getElementById("three").addEventListener("click",threeClicked)
document.getElementById("four").addEventListener("click",fourClicked)
document.getElementById("five").addEventListener("click",fiveClicked)
document.getElementById("six").addEventListener("click",sixClicked)
document.getElementById("seven").addEventListener("click",sevenClicked)
document.getElementById("eight").addEventListener("click",eightClicked)
document.getElementById("nine").addEventListener("click",nineClicked)
document.getElementById("zero").addEventListener("click",zeroClicked)
document.getElementById("dot").addEventListener("click",dotClicked)

//operator click

document.getElementById("add").addEventListener("click",add)
document.getElementById("sub").addEventListener("click",sub)
document.getElementById("mul").addEventListener("click",mul)
document.getElementById("div").addEventListener("click",div)

//button click action

function oneClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"1"
    document.getElementById("display").value=newValue

}

function oneClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"1"
    document.getElementById("display").value=newValue

}

function twoClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"2"
    document.getElementById("display").value=newValue

}

function threeClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"3"
    document.getElementById("display").value=newValue

}

function fourClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"4"
    document.getElementById("display").value=newValue

}

function fiveClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"5"
    document.getElementById("display").value=newValue

}

function sixClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"6"
    document.getElementById("display").value=newValue

}

function sevenClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"7"
    document.getElementById("display").value=newValue

}

function eightClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"8"
    document.getElementById("display").value=newValue

}

function nineClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"9"
    document.getElementById("display").value=newValue

}

function zeroClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"0"
    document.getElementById("display").value=newValue

}

function dotClicked(){

    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"."
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=true

}

//operator click action

function add(){

    if(operatorActionCount>1){
        displayVlaue=Number(document.getElementById("dispaly").value)
        document.getElementById("display").value = "0"
        operatorActionCount=1
        operator="+"
    }else{
        let currentValue=Number(document.getElementById("display").value)
        displayVlaue=displayVlaue+currentValue
        document.getElementById("display").value = "0"
        document.getElementById("display").value=displayVlaue
        operator="+"
    }
}

function sub(){

    if(operatorActionCount>1){
        displayVlaue=Number(document.getElementById("dispaly").value)
        document.getElementById("display").value = ""
        operatorActionCount=1
        operator="-"
    }else{
        displayVlaue=displayVlaue-Number(document.getElementById("display").value)
        document.getElementById("display").value=displayVlaue
        operator="-"
    }
 
}

function div(){

    if(operatorActionCount>1){
        displayVlaue=Number(document.getElementById("dispaly").value)
        document.getElementById("display").value = ""
        operatorActionCount=1
        operator="/"
    }else{
        displayVlaue=displayVlaue/Number(document.getElementById("display").value)
        document.getElementById("display").value=displayVlaue
        operator="/"
    }
 
 }

 function mul(){

    if(operatorActionCount>1){
        displayVlaue=Number(document.getElementById("dispaly").value)
        document.getElementById("display").value = ""
        operatorActionCount=1
        operator="*"
    }else{
        displayVlaue=displayVlaue*Number(document.getElementById("display").value)
        document.getElementById("display").value=displayVlaue
        operator="*"
    }
 
 } 

//clear button action

function clear(){

    document.getElementById("display").value = ""
    displayVlaue=""
    operator=""
    operatorActionCount=
    document.getElementById("dot").disabled = false

}



