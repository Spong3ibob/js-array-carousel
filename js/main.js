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

let active = 0;
const prev = document.querySelector(".prev");
prev.addEventListener("click", function(){
    
   for(let active = 0; active < images.length; active++){
    const item = document.createElement("div");
    item.classList.add("item");
    if(active === 0){
        item.classList.remove("active");
    }else if(active === 1){
        item.classList.add("active");
    }
    const img = document.createElement("img");
    img.setAttribute("src", images[active]);
    item.append(img);
    itemsRef.append(item);
}
})
