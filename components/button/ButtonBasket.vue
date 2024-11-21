<template>
       <div class="statut_nuxt__basket beginning">
                            <img src="/assets/icons/icon 1 - 24px.svg" alt="">
                            <p class="statut_nuxt__basket-text">В корзину</p>
                        </div>
</template>

<style scoped>
.statut_nuxt__basket{
    display: flex;
    padding: 10px 25px;
    border-radius: 5px;
    border: 2px solid #eeeeee;
    align-items: center;
    gap: 10px;
    height: 40px;
}

.statut_nuxt__basket-text{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);

}

@media(max-width: 768px){
    .statut_nuxt__basket{
        padding: 8px 13px;
        height: 35px;
        gap:5px;
    }


}
</style>