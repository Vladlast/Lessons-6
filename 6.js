// Задание 1

var tags = ["div", "section", "article", "h1", "p"]
var classes = ["first", "second", "third", "fourth", "fifth"]

var style = document.createElement("style")
document.head.appendChild(style)

function getcontent(event){
  for (var clas of classes){
    style.appendChild(document.createTextNode(
      ` .${clas} {display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;} `
    ))  
    }
    console.log(style)
}

function getelem (event){
  var ex = document.getElementById("example")
  var i = 0
  for(var elem of tags){
   var newelem = document.createElement(`${elem}`)
    ex.appendChild(newelem)
    newelem.innerHTML = `${elem}`
    newelem.classList.add(classes[i++])
  }
}

// задание 2

var tags2 = [{
    name: "div",
    class: "newdiv",
    style: "display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;",
    onclick: evenfunc},
    {
      name: "section",
      class: "newsection",
    style: "display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;",
    onclick: evenfunc},
      {
        name: "article",
        class: "newarticle",
    style: "display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;",
    onclick: evenfunc},
        {
          name: "h1",
          class: "newh1",
      style: "display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;",
      onclick: evenfunc},
          {
            name: "p",
            class: "newp",
        style: "display: inline-block; margin:5px; border: 5px solid black; width: 100px; height: 100px;",
        onclick: evenfunc},
  ]
  
  function getcontent2(event){
    var ex2 = document.getElementById("example2")
    for (var stag of tags2){
  var newelem = document.createElement(`${stag.name}`)
  ex2.appendChild(newelem)
  newelem.classList.add(stag.class)
  style.appendChild(document.createTextNode(`.${stag.class} { ${stag.style}}`))
  newelem.onclick = stag.onclick
  newelem.innerText = `Кликни ${stag.name}`
    }
  console.log(style)
  
  }
  
  function evenfunc(event){
  alert("Клик")
  }
  
  // Задание 3
  
  var tags3 = [ "div", "p" ]
  
  function findelem (event){
    var classname = "redBack"
    style.appendChild(document.createTextNode(`.${classname} {
      background-color: red!important;
  }`))
    for (var tagg of tags3){
    
  var newtag = document.querySelectorAll(tagg)
  newtag.forEach(element => {
    element? element.classList.add(`${classname}`): undefined    
  });
    }
  }