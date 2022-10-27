const images = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg",
];
const itemsRef = document.querySelector(".items");
for (let i = 0; i < images.length; i++){
    const item = document.createElement("div");
    item.classList.add("item");
    if(i === 0){
        item.classList.add("active");
    }
    const img = document.createElement("img");
    img.setAttribute("src", images[i]);
    item.append(img);
    itemsRef.append(item);
}

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function(){
    const itemActive = document.querySelector(".item.active");
    const nextItem = itemActive.nextElementSibling;
    itemActive.classList.remove("active");
    if( nextItem !== null ){
        nextItem.classList.add("active");
    }
});
