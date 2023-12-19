

let timeout1 = null;
let timeout2 = null;
let timeout3 = null;

timeout1 =  setTimeout(()=>
{


    document.getElementById("ddoor").style.transform = " rotate3d(0, 1, 0, -130deg)";
    document.getElementById("ddoor1").style.transform = " rotate3d(0, 1, 0, 130deg)";
},800)
timeout2= setTimeout(()=>
{

    document.getElementById("prespective").style.transition = " all 3s ease";
    document.getElementById("prespective").style.transform = "scale(4.9)"; 
    document.body.style.background.transition = " all 3s ease";
    document.body.style.background.transform = "scale(4.9)"; 
},500)
timeout3= setTimeout(()=>
{

    document.getElementById("prespective").style.display = " none";
    document.body.style.transition= " all 3s ease";
    document.body.style.opacity = " 0.2";
    document.body.style.display = "none";
   
},3000)




