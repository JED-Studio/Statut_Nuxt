<template>
      <div class="statut_nuxt__footer-contact">
                    <h4 class="statut_nuxt__footer-contact-title">Телефон и Email</h4>
                    <div class="statut_nuxt__footer-contact-flex">

                    <div class="statut_nuxt__footer-bottom-mail-block">
                        <div class="statut_nuxt__footer-bottom-policy">Политика конфиденциальности</div>
                        <div class="statut_nuxt__footer-bottom-offer">Договор оферты</div>
                    </div>
                    <div class="statut_nuxt__footer-contact-mail">
                        <img src="/assets/icons/Communication 1 - 24px.svg" alt="">
                        <a class="statut_nuxt__footer-a">market@estatut.ru</a>
                    </div>
                    <div class="statut_nuxt__footer-contact-mail">
                        <img src="/assets/icons/Device 32 - 24px.svg" alt="">
                        <a class="statut_nuxt__footer-b">8 (968) 660-65-50</a>
                        <img class="statut_nuxt__footer-contact-mail-image" src="/assets/icons/icon6.svg" alt="">
                    </div>
                    <div class="statut_nuxt__footer-bottom-mail-tab">
                        <img src="/assets/icons/icon1.svg" alt="">
                        <div class="statut_nuxt__footer-bottom-adress">ул. Лобачевского, 92, корп. 2 119454, г. Москва</div>
                    </div>
                    <div class="statut_nuxt__footer-bottom-mail-info">© 2020 Издательство «Статут»</div>
                        
                    
                </div>
            </div>
</template>

<style scoped>
.statut_nuxt__footer-contact{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 165px;
}

.statut_nuxt__footer-contact-flex{
    display: flex;
    flex-direction: column;
    gap: 15px;
}


.statut_nuxt__footer-bottom-mail-block{
    display: none;
}

.statut_nuxt__footer-contact-mail{
    display: flex;
    align-items: center;
    gap: 5px;
}




.statut_nuxt__footer-bottom-mail-tab,
.statut_nuxt__footer-bottom-mail-info{
    display: none;
}


h4{
    color: rgba(28, 41, 77, 1);
    font-size: 14px;
    font-family: 500;
}



.statut_nuxt__footer-contact-mail-image{
    display: none;
}

.statut_nuxt__footer-a,
.statut_nuxt__footer-b{
    color: rgba(28, 41, 77, 0.8);
}

@media(max-width: 768px){
    .statut_nuxt__footer-contact-title{
        display: none;
    }
.statut_nuxt__footer-contact-mail{
    border-bottom: 1px solid rgba(42, 61, 72, 0.15);
    padding: 20px 20px;
    
}

.statut_nuxt__footer-bottom-mail-block + .statut_nuxt__footer-contact-mail{
    border-top: 1px solid rgba(42, 61, 72, 0.15);
}


.statut_nuxt__footer-contact-flex{
    display: block;
}

.statut_nuxt__footer-contact{
    width: 100%;
    display: block;
}

.statut_nuxt__footer-bottom-mail-tab{
    display: flex;
    gap: 5px;
    border-bottom: 1px solid rgba(42, 61, 72, 0.15);
    padding: 20px 20px;
}

.statut_nuxt__footer-bottom-adress{
    color: rgba(28, 41, 77, 1);
    font-size: 14px;
    font-weight: 400;
}

.statut_nuxt__footer-bottom-mail-info{
    display: block;
    padding: 20px 20px;
    color: rgba(28, 41, 77, 0.5);
    font-size: 14px;
    font-weight: 400;

}

.statut_nuxt__footer-b{
    color: rgba(28, 41, 77, 1);
}

.statut_nuxt__footer-contact-mail-image{
        display: block;
    }
}



</style>