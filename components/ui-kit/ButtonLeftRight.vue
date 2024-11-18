<template>
    <div class="statut_nuxt__switching">
                    <div class="statut_nuxt__left"><img src="/assets/icons/Chevron Right 1 - 24px.svg" alt=""></div>
                    <div class="statut_nuxt__right"><img class="statut_nuxt__right-img" src="/assets/icons/Chevron Right 1 - 24px.svg" alt=""></div>
                </div>
</template>

<style scoped>
.statut_nuxt__switching{
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgba(28, 41, 77, 0.15);
    
}

.statut_nuxt__left{
    border-right: 1px solid #dddfe4;
    padding: 10px;
    display: flex;
    align-items: center;
}

.statut_nuxt__right{
    padding: 10px;
    display: flex;
    align-items: center;
}



.statut_nuxt__right-img{
    transform: rotate(180deg);
}
</style>