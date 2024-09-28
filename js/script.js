// get slide images in arrar
let slideitems=Array.from(document.querySelectorAll(".slide-container img"));
// set counter
let slidecounter=slideitems.length;
//set current-slide
let currentslide=1;
// get elements prev and next buttons
let slidenumber=document.getElementById("slide-number");
let prev=document.getElementById("prev");
let next=document.getElementById("next");
//handle click on prev and next buttons
prev.onclick=prevSlide;
next.onclick=nextSlide;
//next and prev functions
function prevSlide(){
    if(prev.classList.contains("disabled")){
        //do nothing
    }else{
        currentslide--;
        checker();
    }
}
function nextSlide(){
    if(next.classList.contains("disabled")){
        //do nothing
    }else{
        currentslide++;
        checker();
    }
}
// make pagenation Ul
let pagenationElement=document.createElement("ul");
pagenationElement.setAttribute("class","pagenationList");
for(let i=1;i<=slidecounter;++i){
    let pagenationItem=document.createElement("li");
    pagenationItem.setAttribute("data-index",i);
    pagenationItem.appendChild(document.createTextNode(i));
    pagenationElement.appendChild(pagenationItem);
}
document.querySelector(".indicators").appendChild(pagenationElement);
// set array of ul images
let pagenationBullets=Array.from(document.querySelectorAll(".pagenationList li"));
//loop through indicators
for(let i=0;i<pagenationBullets.length;++i){
pagenationBullets[i].onclick=function(){
    currentslide=parseInt(this.getAttribute("data-index"));
    checker();
}
}
// create checker function
function checker(){
    removeAllActives();
    slidenumber.textContent=`slide ${currentslide} of ${slidecounter}`;
    slideitems[currentslide-1].classList.add("active");
    pagenationElement.children[currentslide-1].classList.add("active");
    //check if first image
    if(currentslide == 1){
        prev.classList.add("disabled");
    }else{
        prev.classList.remove("disabled");
    }
    //check if last image
    if(currentslide == slidecounter){
        next.classList.add("disabled");
    }else{
        next.classList.remove("disabled");
    }
}
console.log(pagenationBullets);
// create remove function
function removeAllActives(){
    //remove active from images
    slideitems.forEach( function(image){
        image.classList.remove("active");
    });
     //remove active from indicators
    pagenationBullets.forEach( function(bullet){
        bullet.classList.remove("active");
    });

}
//trigger the checker function
checker();