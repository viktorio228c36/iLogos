let activeOption = document.querySelector("#slider-option-1") ;
let sliderOptionsEl = document.querySelectorAll(".slider__option-item");
let controler1Left = document.querySelector("#controlerLeft");
let controler1Right = document.querySelector("#controlerRight");
let controler2Left = document.querySelector("#controler2Left");
let controler2Right = document.querySelector("#controler2Right");
let currentSlideNum1 = 0;
let currentSlideNum2 = 0;
let controlerDots1 = document.querySelectorAll(".controler__slide");
let controlerDots2 = document.querySelectorAll(".controler2__slide");
let slider1Cards= [
    {
        title: "Tokenomy crafting, testing and balancing",
        img: "./src/img/slider-1.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Creating user engagement and involvement patterns",
        img: "./src/img/slider-2.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Crafting the general product vision",
        img: "./src/img/slider-3.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Play2earn game balance",
        img: "./src/img/slider-4.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Web3 game mechanics",
        img: "./src/img/slider-5.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
];
let slider2Cards= [
    {
        img: "./src/img/stadium_Concept_art_gameplay_v4 1.png",
        title: "Rumble Kong League",
        text: "An innovative web3 basketball simulator that is aimed at creating the unique ecosystem for the sports fans. A project already backed by the NBA All-Stars champs like Stephen Curry and brands like Under Armour. iLogos is responsible for full-cycle development that includes game design, producing, programming and art production.",
        commentText: "iLogos has experience in translating complex concepts into quality games and has shown that they understand this vision, by helping known publishers build multi-million dollar games across all platforms. They understand NFTs and have experimented with them in-depth already. They understand gaming, and they just get it.",
        commentImg : "./src/img/comment-1.png",
        commentImgDown: "./src/img/rkl.png"
    },
    {
        img: "./src/img/img-slider2.png",
        title: "Tiny Colony",
        text: "The project is a pixelated metaverse where players will be able to build ant colonies, establish massive alliances with other players, and earn their NFTs. iLogos is responsible for full-cycle development that includes game design, producing, programming and art production.",
        commentText: "With iLogos’ support, we are confident that Tiny Colony will strike the right balance between accessibility and complexity. iLogos has a strong track record of delivering titles that strike exactly this type of balance.",
        commentImg : "./src/img/comment-2.png",
        commentImgDown: "./src/img/comment-down-2.png"
    }
];


let changeSlideData2 = (sliderCard)=>{
    
    document.querySelector("#slider2-h2").textContent = sliderCard.title;
    document.querySelector("#slider2-p").textContent = sliderCard.text;
    document.querySelector("#slider2-img").src = sliderCard.img;
    document.querySelector("#comment-text").textContent = sliderCard.commentText;
    document.querySelector("#comment-img").src = sliderCard.commentImg;
    document.querySelector("#comment-img-down").src = sliderCard.commentImgDown;
 
} ;

let changeSlideData1 = (sliderCard)=>{
    document.querySelectorAll(".mainSlideH").forEach(item =>{
        item.textContent = sliderCard.title;
    })
    document.querySelectorAll(".mainSlideP").forEach(item =>{
        item.textContent = sliderCard.text;
    })
    document.querySelectorAll(".mainSlideImg").forEach(item =>{
        item.src = sliderCard.img;
    })
}






let createMainSlide = (sliderCard, slider1, slider2, f) =>{
    animOpacity = 1;
    
    let sliderTimerDisappear = setInterval(()=>{
        animOpacity = animOpacity - 0.05;
        document.querySelector(slider1).style.opacity = animOpacity;
        document.querySelector(slider2).style.opacity = animOpacity;
        if(animOpacity < 0){
            
            clearInterval(sliderTimerDisappear);
            f(sliderCard);
            let sliderTimerAppear = setInterval(()=>{
                animOpacity = animOpacity + 0.05;
                document.querySelector(slider1).style.opacity = animOpacity;
                document.querySelector(slider2).style.opacity = animOpacity;
                if(animOpacity > 1){
                    
                    clearInterval(sliderTimerAppear);
                    
                }
            }, 10)
        }
    }, 10)
    
    

}


sliderOptionsEl.forEach(item =>{
    item.addEventListener('click', (e)=> {
        activeOption.classList.remove("active");
        let activeOptionPrev = activeOption;
        if(e.path[1] === document.querySelector("div.slider__options")){
            activeOption = e.path[0];
        }
        else{
            activeOption = e.path[1];
        }
        
        activeOption.classList.add("active");

        controlerDots1.forEach(item => {
            if(item.dataset.card == currentSlideNum1){
                item.classList.remove("active");
            }
        })
        currentSlideNum1 = +activeOption.dataset.card;
        
        controlerDots1.forEach(item => {
            if(item.dataset.card == currentSlideNum1){
                item.classList.add("active");
            }
        })
        if(activeOption != activeOptionPrev){
            createMainSlide(slider1Cards[activeOption.dataset.card], ".slider__main.PC", ".slider__main.mobile", changeSlideData1);
        }   
    })
    
})
let activeOption2 = document.querySelector("#slider2-opt-1");
document.querySelectorAll(".slider2__option").forEach (i =>{
    i.addEventListener('click', (e)=> {
        activeOption2.classList.remove("active");
        let activeOptionPrev = activeOption2;
        if(e.path[1] === document.querySelector("div.slider2__options")){
            activeOption2 = e.path[0];
        }
        else{
            activeOption2 = e.path[1];
        }
        
        activeOption2.classList.add("active");

        controlerDots2.forEach(item => {
            if(item.dataset.card == currentSlideNum2){
                item.classList.remove("active");
            }
        })
        currentSlideNum2 = +activeOption2.dataset.card;
        
        controlerDots2.forEach(item => {
            if(item.dataset.card == currentSlideNum2){
                item.classList.add("active");
            }
        })
        
        if(activeOption2 != activeOptionPrev){
            
            createMainSlide(slider2Cards[activeOption2.dataset.card], ".slider2__main", ".slider2__main", changeSlideData2);
        }   
    })


})







let changeSlideMobile = (num, currentSlideNum, sliderCards,controlerDots, changeCur,id, f , slider1, slider2) =>{
    controlerDots.forEach(item => {
        if(item.dataset.card == currentSlideNum){
            
            item.classList.remove("active");
        }
    })
    currentSlideNum = currentSlideNum +  num;
    if(currentSlideNum < 0) {  
        currentSlideNum= sliderCards.length - 1;
    }
    if(currentSlideNum > sliderCards.length-1) {  
        currentSlideNum = 0;
    }


    
    if(changeCur == 1) {
        currentSlideNum1 = currentSlideNum;
        activeOption.classList.remove("active");
    activeOption = document.querySelector(`#${id}${currentSlideNum+1}`)
    activeOption.classList.add("active");
    }
    else{
        currentSlideNum2 = currentSlideNum;
        
        activeOption2.classList.remove("active");
        activeOption2 = document.querySelector(`#${id}${currentSlideNum+1}`)
        activeOption2.classList.add("active");
    }





    controlerDots.forEach(item => {
        if(item.dataset.card == currentSlideNum){
            item.classList.add("active");
        }
    })
    
    createMainSlide(sliderCards[+currentSlideNum],  slider1, slider2, f);
}



controler1Left.addEventListener("click", () => changeSlideMobile(-1, currentSlideNum1, slider1Cards, controlerDots1,1,"slider-option-",changeSlideData1 , ".slider__main.PC", ".slider__main.mobile"));
controler1Right.addEventListener("click", ()=> changeSlideMobile(+1, currentSlideNum1, slider1Cards, controlerDots1,1,"slider-option-",changeSlideData1 , ".slider__main.PC", ".slider__main.mobile"));
controler2Left.addEventListener("click", () => changeSlideMobile(-1, currentSlideNum2, slider2Cards, controlerDots2,2,"slider2-opt-", changeSlideData2 ,  ".slider2__main", ".slider2__main"));
controler2Right.addEventListener("click", ()=> changeSlideMobile(+1, currentSlideNum2, slider2Cards, controlerDots2,2,"slider2-opt-", changeSlideData2 ,  ".slider2__main", ".slider2__main"));