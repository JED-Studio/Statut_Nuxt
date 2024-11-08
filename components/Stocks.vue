<template>
      <section class="statut_nuxt__stocks">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__grid">
                <img src="/public/image/Group 1014.png" alt="">
                <img class="statut_nuxt__rectangle" src="/public/image/Rectangle 910.png" alt="">
                <img src="/public/image/Rectangle 911.png" alt="">
                <img class="statut_nuxt__rectangle1" src="/public/image/Rectangle 912.png" alt="">
            </div>
        </div>
    </section>

</template>

<style>
.statut_nuxt__stocks{
    padding: 30px 0px;
    background-color: rgba(249, 249, 250, 1);
}

.statut_nuxt__grid{
    gap: 30px;
    display: grid;
    grid-template-columns: 360px 360px 360px;
    grid-template-rows: 350px 140px;
}

.statut_nuxt__rectangle{
    grid-column: 1 / 2;
}

.statut_nuxt__rectangle1{
    grid-row-start: 1;
    grid-column-start: 3;
}
</style>