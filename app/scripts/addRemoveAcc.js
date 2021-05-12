i = 1;


function addInput() {

    i = i + 1;

    dd = document.createElement("div")
    dd.setAttribute("class", "cost-block")


    //Setting eqq
    x = document.createElement("input")
    x.setAttribute("id", `acc-${i}`)
    x.setAttribute("name", `acc-${i}`)
    x.setAttribute("class", "cost")
    x.setAttribute("type", "number")

    //Making "QTY"
    q = document.createElement("label")
    q.innerHTML = "Cost $"
    // Setting QTY
    y = document.createElement("input")
    y.setAttribute("id", `cost-${i}`)
    y.setAttribute("name", `cost-${i}`)
    y.setAttribute("class", "cost")
    y.setAttribute("type", "number")

    //Minus
    //Making "QTY"
    m = document.createElement("button")
    m.setAttribute("type", "button")
    m.setAttribute("class", "minus")
    m.innerHTML = "-"


    document.querySelector('.cost-container').appendChild(dd)


    dd.appendChild(x)
    dd.appendChild(q)
    dd.appendChild(y)



}


function removeInput() {


    let block = document.querySelector('.cost-container')
    let childCount = block.childElementCount
    if (childCount > 1) {
        block.removeChild(block.lastChild)
    } else {
        console.log("Add a child before removing it")
    }

}

document.querySelector('.plus').addEventListener('click', addInput)

document.querySelector('.minus').addEventListener('click', removeInput);