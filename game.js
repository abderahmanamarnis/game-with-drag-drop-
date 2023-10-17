var dr = document.querySelector(".drop") 

function abd(ed){
   ed.preventDefault();
}
function drag(ed){
   ed.dataTransfer.setData("text" , ed.target.innerHTML)
}
function drop(ed){
   ed.preventDefault();
   var data = ed.dataTransfer.getData("text") 
   if (ed.target.innerHTML == "FALSE" || ed.target.innerHTML =="CORRECT"  || ed.target.innerHTML =="KAYN KAYN" || ed.target.innerHTML =="EMPTY"){
      ed.target.innerHTML = ""
   }
   // ed.target.appendChild(document.getElementById(data))
   ed.target.innerHTML+= data 

}
const arr = ["BAT","GOAT","DRAGON"]
let i = 0
const ob = {
   BAT : "🐐", GOAT  : "🐲" , DRAGON : "10/10"
}
function next(){
   if (dr.innerHTML == "CORRECT"){

      document.getElementById("em").innerHTML= ob[arr[i]]
      i++
      if (i>= arr.length){
         i=0
        
      }
       dr.innerHTML= ""
}
}
function corr(){
   if (dr.innerHTML in ob ){
      // document.getElementById("em").innerHTML=ob[dr.innerHTML]
      dr.innerHTML = "CORRECT"
   //   emoji.textContent= "🦍"
   //   if (dr.innerHTML == "CORRECT"){
   //     var bat = document.getElementById("em")
   //   bat.innerHTML = ""
   //   var emoji = document.createElement("span")
   //   emoji.textContent= "🦍"
   //   var emoji2 = document.getElementById("em")
   //   emoji2.appendChild(emoji)
   //   }
   
   
   
   //    } if (dr.innerHTML =="BA" ){
//       dr.innerHTML = "CORRECT"
//       if (dr.innerHTML == "CORRECT"){
//         var bat = document.getElementById("em")
//       bat.innerHTML = ""
//       var emoji = document.createElement("span")
//       emoji.textContent= "🐲"
//       var emoji2 = document.getElementById("em")
//       emoji2.appendChild(emoji)
//       }
     
    
// }
// if (dr.innerHTML =="B" ){
//    dr.innerHTML = "CORRECT"
//    if (dr.innerHTML == "CORRECT"){
//      var bat = document.getElementById("em")
//    bat.innerHTML = ""
//    var emoji = document.createElement("span")
//    emoji.textContent= "🐐"
//    var emoji2 = document.getElementById("em")
//    emoji2.appendChild(emoji)
//    }
// }

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   }else{
      dr.innerHTML ="FALSE"
     }}



//    } if (dr.innerHTML =="BA" ){
//       dr.innerHTML = "CORRECT"
//       if (dr.innerHTML == "CORRECT"){
//         var bat = document.getElementById("em")
//       bat.innerHTML = ""
//       var emoji = document.createElement("span")
//       emoji.textContent= "🐲"
//       var emoji2 = document.getElementById("em")
//       emoji2.appendChild(emoji)
//       }
     
    
// }
// if (dr.innerHTML =="B" ){
//    dr.innerHTML = "CORRECT"
//    if (dr.innerHTML == "CORRECT"){
//      var bat = document.getElementById("em")
//    bat.innerHTML = ""
//    var emoji = document.createElement("span")
//    emoji.textContent= "🐐"
//    var emoji2 = document.getElementById("em")
//    emoji2.appendChild(emoji)
//    }
// }

