<template>
<div class="statut_nuxt__navigation-menu">    
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex3">
                <div class="statut_nuxt__catalog">
                    <img src="/assets/icons/icon10.svg" alt="">
                    <a href="">Каталог</a>
                </div>
                <a href="">Авторы</a>
                <a href="">Новинки</a>
                <div class="statut_nuxt__discount">
                    <img src="/assets/icons/icon11.svg" alt="">
                    <a href="">Скидки</a>
                </div>
                <a href="">Партнёрам</a>
                <a href="">Мы</a>
            </div>
        </div>
</div>
</template>

<style scoped>

.statut_nuxt__navigation-menu{
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

a{
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    color: rgba(28, 41, 77, 1);
}
</style>