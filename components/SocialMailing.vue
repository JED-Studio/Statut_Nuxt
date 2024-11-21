<template>
    <div class="statut_nuxt__social-mailing">
        
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__social-mailing-flex">
                <div class="statut_nuxt__social-2">
                   <img src="/assets/icons/Facebook Copy.svg" alt="">
                   <img src="/assets/icons/vk Copy.svg" alt="">
                   <img src="/assets/icons/instagram Copy.svg" alt="">
               </div>
                <div class="statut_nuxt__social-mailing-logo">
            <img src="/public/image/logo.png" alt="">
            <FormTelega />
        </div>
               <div class="statut_nuxt__social">
                   <img src="/assets/icons/Facebook.svg" alt="">
                   <img src="/assets/icons/Instagram.svg" alt="">
                   <img src="/assets/icons/Twitter.svg" alt="">
               </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.statut_nuxt__social-mailing-logo{
    display: flex;
    width: 100%;
    max-width: 791px;
    justify-content: space-between;
}

.statut_nuxt__social-mailing{
    background-color: #f1f1f2;
}

.statut_nuxt__social-mailing-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0px;

}

.statut_nuxt__social{
    display: flex;
    gap: 15px;
    padding-left: 15px;
}

.statut_nuxt__social-2{
    display: none;
}

@media(max-width: 767px){
    .statut_nuxt__social{
        display: none;
    }

    .statut_nuxt__social-mailing-logo{
        padding: 20px 10px 0px 10px;
        gap:15px

    }

    .statut_nuxt__social-2{
        display: flex;
        gap: 15px;
        justify-content: center;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(28, 41, 77, 0.15);
    }
    .statut_nuxt__social-mailing-flex{
        display: block;

    }

    
}
</style>