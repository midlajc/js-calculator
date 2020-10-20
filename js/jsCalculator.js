//button Click
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

//clear click

document.getElementById("aclear").addEventListener("click",allClear)
document.getElementById("backSpace").addEventListener("click",backSpace)

//button click action

function oneClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"1"
    document.getElementById("display").value=newValue
    enableOperator()
}

function twoClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"2"
    document.getElementById("display").value=newValue
    enableOperator()
}

function threeClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"3"
    document.getElementById("display").value=newValue
    enableOperator()
}

function fourClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"4"
    document.getElementById("display").value=newValue
    enableOperator()
}

function fiveClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"5"
    document.getElementById("display").value=newValue
    enableOperator()
}

function sixClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"6"
    document.getElementById("display").value=newValue
    enableOperator()
}

function sevenClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"7"
    document.getElementById("display").value=newValue
    enableOperator()
}

function eightClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"8"
    document.getElementById("display").value=newValue
    enableOperator()
}

function nineClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"9"
    document.getElementById("display").value=newValue
    enableOperator()
}

function zeroClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"0"
    document.getElementById("display").value=newValue
    enableOperator()
}

function dotClicked(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"."
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=true
    enableOperator()
}

//operator click action

function add(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"+"
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=false
    disableOperator()
}

function sub(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"-"
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=false
    disableOperator()
}

function div(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"/"
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=false
    disableOperator()
 }

 function mul(){
    let oldVlaue=document.getElementById("display").value
    let newValue=oldVlaue+"*"
    document.getElementById("display").value=newValue
    document.getElementById("dot").disabled=false
    disableOperator()
 } 

//clear button action

function backSpace(){
    let currentValue=document.getElementById("display").value
    strrev=reverse(currentValue)
    strrev=strrev.replace(strrev.charAt(0),"")
    currentValue=reverse(strrev)
    document.getElementById("display").value=currentValue
    /*alert("      Not working\nwill be fixed soon 😁")*/
}

function allClear(){
    document.getElementById("display").value = ""
    document.getElementById("dot").disabled = false
}

//calculate

function calculate(){
    let displayVlaue=document.getElementById("display").value
    let result=eval(displayVlaue)
    document.getElementById("display").value = result
    document.getElementById("dot").disabled = false
}


let reverse=(s)=>{
    return s.split("").reverse().join("");
}

let disableOperator=()=>{
    document.getElementById("mul").disabled = true
    document.getElementById("sub").disabled = true
    document.getElementById("add").disabled = true
    document.getElementById("div").disabled = true
}

let enableOperator=()=>{
    document.getElementById("mul").disabled = false
    document.getElementById("sub").disabled = false
    document.getElementById("add").disabled = false
    document.getElementById("div").disabled = false

}