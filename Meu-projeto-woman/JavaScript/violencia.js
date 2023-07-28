/*var slid = document.querySelector("#dx");

function crat(){
    dx++;
    if(dx > dx.length -1){
        dx = 0;
    }
    slid.style.transform ='translateX(${-dx * 500}px)'
    
}
setInterval(slid,1000);*/
//parei aqui.
let titulo = document.createElement("h1")
titul.appendChild(titulo).textContent ="Combate ao feminicídio"
titulo.style.color ="#fff"
titulo.style.marginLeft="4%"
titulo.style.marginTop ="-3%"
titulo.style.marginBottom ="15%"

let para = document.createElement("p")
dR.appendChild(para).textContent ='Amor com violência é doença. “Em briga de marido e mulher se mete a colher...”. Denuncie!  Ligue – 180,  e evite mais um feminicídio Esse ódio de morte é sentença  Cuidado  com  esse tipo de amor mentiroso, impudico. Relação muito propagada, melosa; desconfie!  Por detrás de um beijo escandaloso, em público, O assassino se disfarça em sua efígie.;  Ele bate, esmurra, humilha; tem ódio mortal. Depois, fala que a ama; finge... ela o perdoa... O homicida não vê a hora de dar o bote fatal. Ele é desumano e a torna escrava diuturnamente. Ele obriga ela a cozinhar, lavar, passar e depois a magoa... Ela não pede ajuda, está só... ele vai matá-la estupidamente.  (Prof:Osmar Fernandes)'

dR.style.marginTop="20%"
  para.style.fontSize ="1.6em"
para.style.width ="34%";
para.style.height ="2em";
   para.style.color ="#fff"; 
   para.style.marginTop ="-20%";
   para.style.marginLeft ="14%"
   para.paddingTop ="40%";

   function conteudo(){
  
    
   

      document.getElementById("dR").appendChild(para).animate(
    
        
        [{transform:'sclale(3, 3, 5, 6)'},
          {width:"14em"},
          {height:"2em"},
        {opacity: "0.0"},
        
           
            
           
        
        {transform:"rotate(3deg)"},
        {fontSize:"1px"},
        {transform:"scale(-1, -1.1)"},
        {fontSize:"3px"},
        {transform:"rotate(60deg)"},
        {fontSize:"6px"},
        {transform:"rotate(1600deg)"},
        {fontSize:"12px"},
        
        {transform:"(-1650deg)"}
        ],
        {
            duration:4000,
        }
);

    }
    para.addEventListener("load", conteudo())



let imagem = document.createElement("img")
imagem.src = "imagen/Osmar Soares Fernandes.jpg"



document.getElementById("dz").appendChild(imagem)
imagem.style.transform ="skew(-11deg)"
imagem.style.position="fixed"
imagem.style.width ="35%"
imagem.style.height ="30em"
 imagem.style.marginLeft ="60%"
 imagem.style.marginTop ="-5%"
 imagem.style.marginBottom ="-2%"
 imagem.style.paddingTop ="5%"
 imagem.style.borderRadius ="10%"
imagem.style.boxShadow ="0px 0px 20px 1px #fff"
imagem.style.borderColor="#ffff"
imagem.style.border ="groove"
imagem.style.boxSizing ="border-box"
imagem.style.paddingTop="1px"

function creat(){
    
   
document.getElementById("dz").appendChild(imagem).animate(
[ {position:"fixed"},
     {width:"0px"},
        {transform:" scale(1, -10.-30) translateX(100%)", rigth:"100%"},
        {transform:"scale(21,-5.-1)"},
        {transform:"scale(1,5.-1)"},
    {boxShadow:"-10px 0px 0px 60px #fff3f1",
    transform:"matrix(1,3,4,4,4,,4,44,4)",
    transform:"scale(1, -5.1)",
boxSizing:"border-box",
transform:"rotateY(460deg)",
border:"groove",
backgroundColor: "#fff"},
        {transform:"translateX(0%)"},
        {transform:"scale(-1,-1.1)"},
        {transform:"scale(1.3.1)"},
    
    {transform:"translateX(-100%)"},
   
    {transform:"translateX(0%)"},
   
    
    
    ],
    {
        duration:1200,
    }
    );
 
}
imagem.addEventListener("click", creat())


let eleMe = document.createElement("img")
eleMe.src = "imagen/VIOLÊNCIA-MULHER-01-BLOG.jpg"

document.querySelector("#dx").appendChild(eleMe)



function elem(){
 for(let eleMe = 0; 1<eleMe.length; i++){
    eleMe[1].classList.toggle('imagem/VIOLÊNCIA-MULHER-01-BLOG.jpg')
 }

   
    document.querySelector("#dx").appendChild(eleMe)
    
    eleMe.style.width ="100%"
    eleMe.style.height ="33em"
    eleMe.style.marginLeft ="-20%"
    eleMe.style.marginRight ="1%"
    eleMe.style.marginTop ="-20%"
    eleMe.style.marginBottom ="0%"
    eleMe.style.paddingTop ="-28%"
    eleMe.style.paddingLeft ="20%"
    eleMe.style.paddingRight ="-3%"
    eleMe.style.paddingBottom ="10%"
     document.querySelector("#dz").appendChild(eleMe).animate(
        [  {marginTop:"-20px"},
            {transform:"scale(1, -4.1) rotate(360deg)"},
        {transform:"scale(3, 4.-1)",
        transform:"rotate(160deg)"},
        {transform:"rotate(60deg)"},
       
        {transform:"rotate(30deg)"},
        {transform:"rotate(10deg)"},
     
        ],
        {
            duration:5000,
        }
        );
       
      
imagem.style.display ="none"
para.style.display ="none"; 
 
    
    }
    //setInterval(creat,1500)
    imagem.addEventListener("click", elem)

/*
function slid(){
    setTimeout(6000)
    if('onload = creat();creat().length;onload = elem()'){
    
}
else 
{slid.document.setTimeout(4000);
        
   
}}
imagem.addEventListener("load", slid())*/

