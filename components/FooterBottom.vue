<template>
      <div class="statut_nuxt__footer-bottom">
                <div class="statut_nuxt__footer-bottom-flex">
                <div class="statut_nuxt__footer-bottom-text">© 2020 Издательство «Статут»</div>
                <div class="statut_nuxt__footer-bottom-adress">ул. Лобачевского, 92, корп. 2 119454, г. Москва</div>
            </div>
            <div class="statut_nuxt__footer-bottom-flex-1">
                <div class="statut_nuxt__footer-bottom-policy">Политика конфиденциальности</div>
                <div class="statut_nuxt__footer-bottom-offer">Договор оферты</div>
            </div>
     </div>
</template>

<style scoped>
.statut_nuxt__footer-bottom{
    padding: 40px 0px 45px 0px
}


.statut_nuxt__footer-bottom{
    display: flex;
    align-items: center;
    gap: 67px;
}

.statut_nuxt__footer-bottom-adress,
.statut_nuxt__footer-bottom-policy,
.statut_nuxt__footer-bottom-offer{
    font-size:14px;
    font-weight: 400;
}

.statut_nuxt__footer-bottom-text{color: rgba(28, 41, 77, 0.5);}

.statut_nuxt__footer-bottom-flex{
    display: flex;
    align-items: center;
    gap: 208px;
}

.statut_nuxt__footer-bottom-flex-1{
    display: flex;
    align-items: center;
    gap: 30px;
}

@media (max-width: 768px){
    .statut_nuxt__footer-bottom{
        display: none;
    }
}
</style>