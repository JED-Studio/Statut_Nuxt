<template>
    <div class="statut_nuxt__social-mailing">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__social-mailing-flex">
            <img src="/public/image/logo.png" alt="">
            <FormTelega />
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
.statut_nuxt__social-mailing{
    background-color: #f1f1f2;
}

.statut_nuxt__social-mailing-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0px;
}
</style>