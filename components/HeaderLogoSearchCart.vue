<template>
    <div class="statut_nuxt__logo-search-cart">    
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex2">

                <div class="statut_nuxt__logo-search">
                    
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
                    <div class="statut_nuxt__cart-item">
                        <img src="/assets/icons/icon9.svg" alt="">
                        <a href="">Корзина</a>
                    </div>
                </div>

            </div>            
        </div>
</div>
</template>

<style scoped>
.statut_nuxt__logo-search-cart{
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

a{
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color:rgba(28, 41, 77, 1);
}






</style>