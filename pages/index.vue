<template>
    <div>
    <header class="statut_nuxt__header">

    <div class="statut_nuxt__block">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex">
               <div class="statut_nuxt__location">
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon1.svg" alt="">
                       <span>Махачкала</span>
                   </div>
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon2.svg" alt="">
                       <span>Доставка и оплата</span>
                   </div>
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon3.svg" alt="">
                       <span>Адрес и часы работы</span>
                   </div>
               </div>
       
       
               <div class="statut_nuxt__contact">
                   <div class="statut_nuxt__contact-item">
                      <img src="/assets/icons/icon4.svg" alt="">
                      <div>market@estatut.ru</div>
                   </div>
                   <div class="statut_nuxt__contact-item">
                      <img src="/assets/icons/icon5.svg" alt="">
                      <div>8 (968) 660-65-50</div>
                      <img src="/assets/icons/icon6.svg" alt="">
                   </div>
               </div>
            </div>
        </div>
    </div>




<div class="statut_nuxt__block2">    
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex2">

                <div class="statut_nuxt__logo-search">
                    
                        <img src="/public/image/logo.png" alt="">
                    
    
                    <div class="statut_nuxt__search">
                        <input type="text" placeholder="Поиск по сайту">
                    </div>
                </div>

                <div class="statut_nuxt__cart">
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon7.svg" alt="">
                        <span href="">Отложено</span>
                    </div>
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon8.svg" alt="">
                        <span href="">Войти</span>
                    </div>
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon9.svg" alt="">
                        <span href="">Корзина</span>
                    </div>
                </div>

            </div>            
        </div>
</div>




<div class="statut_nuxt__block3">    
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex3">
                <div class="statut_nuxt__catalog">
                    <img src="/assets/icons/icon10.svg" alt="">
                    <span>Каталог</span>
                </div>
                <div>Авторы</div>
                <div>Новинки</div>
                <div class="statut_nuxt__discount">
                    <img src="/assets/icons/icon11.svg" alt="">
                    Скидки
                </div>
                <div>Партнёрам</div>
                <div>Мы</div>
            </div>
        </div>
</div>



    </header>

    <section class="statut_nuxt__section">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__grid">
                <img src="/public/image/Group 1014.png" alt="">
                <img class="statut_nuxt__rectangle" src="/public/image/Rectangle 910.png" alt="">
                <img src="/public/image/Rectangle 911.png" alt="">
                <img class="statut_nuxt__rectangle1" src="/public/image/Rectangle 912.png" alt="">
            </div>
        </div>
    </section>






</div>
</template>

<style>
.statut_nuxt__block{
    border-bottom: 1px solid rgba(223, 224, 225, 1);
}

.statut_nuxt__container{
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
}


.statut_nuxt__flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
}

.statut_nuxt__location{
    display: flex;
    gap: 30px;
    align-items: center;
}

.statut_nuxt__location-item{
    display: flex;
    gap: 5px;
    align-items: center;
}



.statut_nuxt__contact{
    display: flex;
    gap: 8px;
}

.statut_nuxt__contact-item{
    display: flex;
    align-items: center;
    gap: 5px;
}







/* block 2 */
.statut_nuxt__block2{
    margin: 20px 0px;
}

.statut_nuxt__flex2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}

.statut_nuxt__logo-search{
    display: flex;
    align-items: center;
    gap: 30px;
}

.statut_nuxt__search{

}

.statut_nuxt__cart{
    display: flex;
    align-items: center;
    gap: 30px;

}

.statut_nuxt__cart-item{
    display: flex;
    align-items: center;
    gap: 5px;
}


/*block3 */

.statut_nuxt__block3{
    margin: 20px 0px;
}

.statut_nuxt__flex3{
    display: flex;
    align-items: center;
    gap: 25px;

}

.statut_nuxt__catalog,
.statut_nuxt__discount{
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

/*section */

.statut_nuxt__section{
    padding-top: 30px;
    background-color: rgba(249, 249, 250, 1);
}

.statut_nuxt__grid{
    gap: 30px;
    display: grid;
    grid-template-columns: 360px 360px 360px;
    grid-template-rows: 350px 140px;
}

.statut_nuxt__rectangle{
    grid-column: 1 / 2;
}

.statut_nuxt__rectangle1{
    grid-row-start: 1;
    grid-column-start: 3;
}
</style>