let menuList = document.getElementById("menuList")
let menuHeader = document.getElementById("menuHeader")


let divheader = document.createElement("div")
divheader.className = "divheader"
divheader.innerHTML = "Menu"
menuHeader.appendChild(divheader)

let headerText = document.createElement("p")
headerText.innerHTML = "We take 'garden fresh' very seriously...offering you a complete farm to table experience. Our ingredients are found locally using only the best organic suppliers available. Enjoy!"
menuHeader.appendChild(headerText)

let buttons = `<button type="button" id="allButton">All</button>
<button type="button" id="startersButton">Starters</button>
<button type="button" id="entreesButton">Entrees</button>
<button type="button" id="dessertsButton">Desserts</button>`
menuHeader.insertAdjacentHTML('beforeend',buttons)

let allButton = document.getElementById("allButton")
let startersButton = document.getElementById("startersButton")
let entreesButton = document.getElementById("entreesButton")
let dessertsButton = document.getElementById("dessertsButton")


for(i = 0; i < menu.length ; i++){
  let menuObject = menu[i]

  let menuListing = `
  <li>
     <img src="${menuObject.imageURL}" alt="Menu Picture"><br/>
     <lable>${menuObject.title}</lable>
     <p>${menuObject.description}</p>
     <p>${menuObject.price}</p>
  </li>
  `

  menuList.insertAdjacentHTML('beforeend',menuListing)
}

allButton.addEventListener("click", function(){
  menuList.innerHTML = ''
  for(i = 0; i < menu.length ; i++){
    let menuObject = menu[i]

  if (menuObject.course == "Starters" || menuObject.course == "Entrees" || menuObject.course == "Desserts"){
    let menuListing = `
    <li>
       <img src="${menuObject.imageURL}" alt="Menu Picture"><br/>
       <lable>${menuObject.title}</lable>
       <p>${menuObject.description}</p>
       <p>${menuObject.price}</p>
    </li>
    `

    menuList.insertAdjacentHTML('beforeend',menuListing)
  }
  }
})

startersButton.addEventListener("click", function(){

  menuList.innerHTML = ''
  for(i = 0; i < menu.length ; i++){
    let menuObject = menu[i]

  if (menuObject.course == "Starters"){
    let menuListing = `
    <li>
       <img src="${menuObject.imageURL}" alt="Menu Picture"><br/>
       <lable>${menuObject.title}</lable>
       <p>${menuObject.description}</p>
       <p>${menuObject.price}</p>
    </li>
    `

    menuList.insertAdjacentHTML('beforeend',menuListing)
  }
  }
})

entreesButton.addEventListener("click", function(){

  menuList.innerHTML = ''
  for(i = 0; i < menu.length ; i++){
    let menuObject = menu[i]

  if (menuObject.course == "Entrees"){
    let menuListing = `
    <li>
       <img src="${menuObject.imageURL}" alt="Menu Picture"><br/>
       <lable>${menuObject.title}</lable>
       <p>${menuObject.description}</p>
       <p>${menuObject.price}</p>
    </li>
    `

    menuList.insertAdjacentHTML('beforeend',menuListing)
  }
  }
})

dessertsButton.addEventListener("click", function(){

  menuList.innerHTML = ''
  for(i = 0; i < menu.length ; i++){
    let menuObject = menu[i]

  if (menuObject.course == "Desserts"){
    let menuListing = `
    <li>
       <img src="${menuObject.imageURL}" alt="Menu Picture"><br/>
       <lable>${menuObject.title}</lable>
       <p>${menuObject.description}</p>
       <p>${menuObject.price}</p>
    </li>
    `

    menuList.insertAdjacentHTML('beforeend',menuListing)
  }
  }
})
