<template>
    <div class="statut_nuxt__logo-search-cart">    
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex2">

                <div class="statut_nuxt__logo-search">
                    <img class="statut_nuxt__sidebar" src="/assets/icons/Interface 85 - 24px.svg" alt="">
                    
                        <img src="/public/image/logo.png" alt="">
                        
                        <Form />
                        
                </div>

                <div class="statut_nuxt__cart">
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon7.svg" alt="">
                        <a href="">Отложено</a>
                    </div>
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon8.svg" alt="">
                        <a href="">Войти</a>
                    </div>
                    <div class="statut_nuxt__cart-item-basket">
                        <div class="statut_nuxt__cart-basket">
                        <img class="statut_nuxt__cart-basket-img" src="/assets/icons/icon9.svg" alt="">
                        <div class="statut_nuxt__cart-item-num">10</div>
                        </div>
                        <a href="">Корзина</a>
                    </div>
                </div>

            </div>            
        </div>
</div>
</template>

<style scoped>
.statut_nuxt__logo-search-cart{
    padding: 20px 0px;
}

.statut_nuxt__flex2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}

.statut_nuxt__sidebar{display: none;}

.statut_nuxt__logo-search{
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
}



.statut_nuxt__cart{
    display: flex;
    align-items: center;
    gap: 30px;
    padding-left: 10px;
}

.statut_nuxt__cart-item{
    display: flex;
    align-items: center;
    gap: 5px;
}
.statut_nuxt__cart-item-basket{
    display: flex;
    align-items: center;
    gap: 5px;
}

.statut_nuxt__cart-basket{position: relative;}

.statut_nuxt__cart-item-num{
    padding: 2px;
    align-items: center;
    display: flex;
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 50%;
    font-size: 9px;
    font-weight: 500;
    width: 15px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 122, 0, 1);
    color: white;
   
}

a{
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color:rgba(28, 41, 77, 1);
}



@media (max-width: 768px) {
   

    .statut_nuxt__logo-search-cart{
        padding: 15px 0px;
        border: 1px solid rgba(236, 236, 236, 1);
    }

    .statut_nuxt__sidebar{display: block;}

    .statut_nuxt__cart-item{display: none;}

    .statut_nuxt__cart-basket-img{width: 25px; height: 25px;}

    a{display: none;}

}


</style>