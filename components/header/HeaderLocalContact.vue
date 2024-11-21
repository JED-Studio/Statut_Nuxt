<template>
    <div class="statut_nuxt__location-contact">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__flex">
               <div class="statut_nuxt__location">
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon1.svg" alt="">
                       <span class="statut_nuxt__location-item-text">Махачкала</span>
                   </div>
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon2.svg" alt="">
                       <span class="statut_nuxt__location-item-text">Доставка и оплата</span>
                   </div>
                   <div class="statut_nuxt__location-item">
                       <img src="/assets/icons/icon3.svg" alt="">
                       <span class="statut_nuxt__location-item-text">Адрес и часы работы</span>
                   </div>
               </div>
       
       
               <div class="statut_nuxt__contact">
                   <div class="statut_nuxt__contact-item">
                      <img src="/assets/icons/icon4.svg" alt="">
                      <span class="statut_nuxt__contact-item-text">market@estatut.ru</span>
                   </div>
                   <div class="statut_nuxt__contact-item">
                      <img src="/assets/icons/icon5.svg" alt="">
                      <span class="statut_nuxt__contact-item-text">8 (968) 660-65-50</span>
                      <img src="/assets/icons/icon6.svg" alt="">
                   </div>
               </div>
            </div>
        </div>
    </div>

</template>

<style>
.statut_nuxt__location-contact{
    border-bottom: 1px solid rgba(223, 224, 225, 1);
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

.statut_nuxt__location-item-text{
    font-size: 14px;
    color: rgba(28, 41, 77, 0.8);
    font-weight: 400;
}


.statut_nuxt__contact{
    display: flex;
    gap: 30px;
}

.statut_nuxt__contact-item{
    display: flex;
    align-items: center;
    gap: 5px;
}

.statut_nuxt__contact-item-text{
    font-size: 14px;
    color: rgba(28, 41, 77, 0.8);
    font-weight: 500;
    font-style: normal;
}

@media(max-width: 768px){
       .statut_nuxt__location-contact{
           display: none;
       }
}
</style>