<template>
      <section class="statut_nuxt__stocks">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__grid">
                <div class="statut_nuxt__stock-slider">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">
                    <img class="gud" src="/public/image/Group 1014.png" alt="">

                    
                    <div class="statut_nuxt__stock-slider-button">
                       <div class="statut_nuxt__stock-slider-left">g</div>
                       <div class="statut_nuxt__stock-slider-right">l</div>
                    </div>
                    <div class="statut_nuxt__stock-slider-pols">
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                       <div class="statut_nuxt__stock-pol"></div>
                    </div>
                </div>
                


                <div class="statut_nuxt__stock-card">

                <div class="statut_nuxt__stock-item" >
                    <div class="statut_nuxt__stock-width">
                        <div class="statut_nuxt__stock-width-day">
                            <span class="statut_nuxt__stock-width-day-text">Книга дня</span>
                            <div class="statut_nuxt__stock-width-time">
                                <span>08:56:00</span>
                            </div>
                        </div>

                        <div class="statut_nuxt__stock-width-img">
                           <img src="/public/image/image 213.png" alt="">
                        </div>

                    <div class="statut_nuxt__stock-width-text">
                        <p class="statut_nuxt__stock-width-title">Корпоративное право</p>
                        <p class="statut_nuxt__stock-width-description">Инвестирование: способы, риски, субъекты : монография</p>
                        <p class="statut_nuxt__stock-width-author">Майфат А.В.</p>
                        <p class="statut_nuxt__stock-width-price">4 450 ₽</p>
                    </div>
                   
                    <div class="statut_nuxt__buttons-item">
                        <ButtonBasket />
                        <ButtonFavorite />
                    </div>

                  </div>
                </div>












                </div>

                <div class="statut_nuxt__stock-rectangle">
                    <p class="statut_nuxt__stock-rectangle-text">Бесплатно доставим
                        ваш заказ при
                        покупке от 2000 ₽</p>
                    <img src="/public/image/TDV.png" alt="">
                </div>
                <div class="statut_nuxt__stock-rectangle-2">
                    <p class="statut_nuxt__stock-rectangle-title">Скидка при регистрации до 15%</p>
                    <img src="/public/image/illustration2.png" alt="">
                </div>

            </div>
        </div>
    </section>

</template>

<style>
.statut_nuxt__stock-slider{
    display: flex;
    overflow-x:auto;
    width: 750px;
    height: 350px;
    
}

.statut_nuxt__stock-slider-button{
    position: absolute;
}

.gud{
    min-width: calc(750px / 1);
}


.statut_nuxt__stock-slider::-webkit-scrollbar{
    display: none;
}




.statut_nuxt__stock-rectangle-text{
    font-size: 20px;
    font-weight: 400;
    font-family: 'Gosha Sans', sans-serif;
    color: rgba(255, 255, 255, 1);
    line-height: 25px; 
}

.statut_nuxt__stock-rectangle-title{
    font-size: 20px;
    font-weight: 400;
    font-family: 'Gosha Sans', sans-serif;
    color: rgba(28, 41, 77, 1);
    line-height: 25px; 
}


.statut_nuxt__stocks{
    padding: 30px 0px;
    background-color: rgba(249, 249, 250, 1);
}

.statut_nuxt__stock-slider{
    
    background-color: greenyellow;
    grid-column: 1 / 3;
    border-radius: 5px;
}

.statut_nuxt__grid{
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 350px 140px;
}




.statut_nuxt__stock-rectangle{
    display: flex;
    grid-column: 1 / 2;
    width: 100%;
    padding: 20px 25px;
    align-items: center;
    max-width: 360px;
    height: 140px;
    background-color: rgba(109, 55, 143, 1);
    border-radius: 5px;
}

.statut_nuxt__stock-rectangle-2{
    display: flex;
    grid-column: 2 / 3;
    width: 100%;
    max-width: 360px;
    align-items: center;
    padding: 20px 25px;
    height: 140px;
    background-color: rgba(255, 216, 239, 1);
    border-radius: 5px;
}

.statut_nuxt__stock-card{
    grid-row-start: 1;
    grid-column-start: 3;
    
}













.statut_nuxt__stock-item{
    padding: 20px 20px 26px 20px;
    background-color: white;
    width: 100%;
    max-width: 360px;
    height: 520px;
    border-radius: 5px;
}

.statut_nuxt__stock-width{

    
}

.statut_nuxt__stock-width-day{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.statut_nuxt__stock-width-day-text{
    font-size: 16px;
    font-weight: 500;
}

.statut_nuxt__stock-width-time{
    padding: 5px 10px;
    background-color:rgba(255, 122, 0, 0.15);
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    color: rgba(255, 122, 0, 1);
}

.statut_nuxt__stock-width-img{
    text-align: center;
    margin-bottom: 15px;
}

.statut_nuxt__stock-width-title{
    font-size: 12px;
    font-weight: 400;
    color: rgba(28, 41, 77, 0.5);
    line-height: 15px;
    margin-bottom: 8px;
}

.statut_nuxt__stock-width-description{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
    line-height: 19px;
    margin-bottom: 8px;
}

.statut_nuxt__stock-width-author{
    font-size: 12px;
    font-weight: 400;
    color: rgba(28, 41, 77, 1);
    line-height: 15px;
    margin-bottom: 8px;
}

.statut_nuxt__stock-width-price{
    font-size: 18px;
    font-weight: 700;
    color: rgba(28, 41, 77, 1);
    line-height: 20px;
    margin-bottom: 12px;
}





.statut_nuxt__evaluations{
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}


.statut_nuxt__buttons-item{
    display: flex;
    gap: 10px;
}

@media(max-width: 768px){
    .statut_nuxt__stocks{padding: 10px 0px;}
    .statut_nuxt__grid{display: block;}

    .statut_nuxt__stock-slider{margin-bottom: 10px;}

    .statut_nuxt__stock-item{
        margin-bottom: 10px;
        max-width: 100%;
    }
    
    .statut_nuxt__stock-rectangle{
        max-width: 100%;
        margin-bottom: 10px;
    }

    .statut_nuxt__stock-rectangle-2{max-width: 100%;}
}
</style>