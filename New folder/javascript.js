
let timeout1 = null;
let timeout2 = null;
let timeout3 = null;
f = 0;

timeout1 =  setTimeout(()=>
{
    document.getElementById("ddoor").style.transform = " rotate3d(0, 1, 0, -130deg)";
    document.getElementById("ddoor1").style.transform = " rotate3d(0, 1, 0, 130deg)";
    f++
},600)
timeout2= setTimeout(()=>
{

    document.getElementById("prespective").style.transition = " all 10s ease";
    document.getElementById("prespective").style.transform = "scale(6)"; 
    document.body.style.background.transition = " all 8s ease";
    document.body.style.background.transform = "scale(6)"; 
    f++
},500)
timeout3= setTimeout(()=>
{

    document.getElementById("prespective").style.display = " none";
    document.body.style.transition= " all 3s ease";
    document.body.style.opacity = " 0.2";
    document.body.style.display = "none";
   f++
   clearTimout(f);
},4000)

function clearTimout(f){
    if(f == 3)
{
    console.log(f);
clearTimeout(timeout1);
clearTimeout(timeout2);
clearTimeout(timeout3)
}

}




