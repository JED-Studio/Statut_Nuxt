<template>
     <div class="statut_nuxt__stock-slider">
                    <div class="bot">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                </div>
                    <div class="statut_nuxt__stock-slider-button">

                       <div class="statut_nuxt__stock-slider-left">
                        <img class="statut_nuxt__stock-slider-img" src="/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                       <div class="statut_nuxt__stock-slider-right">
                        <img class="statut_nuxt__stock-slider-img" src="/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                    </div>
                    <div class="statut_nuxt__stock-slider-pols">
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                    </div>
                </div>
</template>

<style scoped>
.statut_nuxt__stock-slider-img{
    width: 20px;
    height: 20px;
}

.statut_nuxt__stock-slider-right > img{
    transform: rotate(180deg);
}



.statut_nuxt__stock-pol{
    border-radius: 2px;
    width: 25px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.85);
}

.statut_nuxt__stock-slider-pols{
    transform: translate(-50%, -50%);
    left: 50%;
    top: 90%;
    position: absolute;
    max-width: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
















.statut_nuxt__stock-slider{
    background-color: greenyellow;
    grid-column: 1 / 3;
    border-radius: 5px;
}

.statut_nuxt__stock-slider{
   position: relative;
   width: 100%;
}


.bot{
    display: flex;
    overflow-x:auto;
    height: 100%;
}

.bot::-webkit-scrollbar{
    display: none;
}


.statut_nuxt__stock-slider-button{
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: absolute;
    max-width: 750px;
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.gud{
    width: 100%;
}

.statut_nuxt__stock-slider-left{
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    margin-left: 28px;
}
.statut_nuxt__stock-slider-right{
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    margin-right: 28px;
}

@media(max-width: 768px){
    .statut_nuxt__stock-slider{margin-bottom: 10px;}

    .statut_nuxt__stock-slider-button{
        display: none;
    }
}
</style>