

function abd(ed){
   ed.preventDefault();
}
function drag(ed){
   ed.dataTransfer.setData("text" , ed.target.innerHTML)
}
function drop(ed){
   ed.preventDefault();
   var data = ed.dataTransfer.getData("text") 
   if (ed.target.innerHTML == "FALSE" || ed.target.innerHTML =="CORRECT"  || ed.target.innerHTML =="KAYN KAYN" ){
      ed.target.innerHTML = ""
   }
   // ed.target.appendChild(document.getElementById(data))
   ed.target.innerHTML+= data 
}
function corr(){
   var dr = document.querySelector(".drop") 
   // if (dr.innerHTML =="BAT" ){
   //   dr.innerHTML = "CORRECT"
   // }
   // else{
   //    dr.innerHTML = "FALSE"
   // }
switch (dr.innerHTML ){
   case "BAT":
      dr.innerHTML = "CORRECT"
      break;
      case "BATATA":
      dr.innerHTML = "KAYN KAYN"
      break;
      default : 
      dr.innerHTML = "FALSE"


   

   
} 
}
