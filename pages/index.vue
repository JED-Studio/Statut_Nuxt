<template>
    <header class="statut_nuxt__header">


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
                      <img src="/assets/icons/icon6.svg" alt="">
                      <div>market@estatut.ru</div>
                   </div>
                   <div class="statut_nuxt__contact-item">
                      <img src="/assets/icons/icon5.svg" alt="">
                      <div>8 (968) 660-65-50</div>
                      <img src="/assets/icons/icon4.svg" alt="">
                   </div>
               </div>
            </div>
        </div>

        
        


    </header>
</template>

<style>
.statut_nuxt__header{
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
</style>