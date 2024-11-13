<template>
    <section class="statut_nuxt__profit">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__profit-block">

                <div class="statut_nuxt__profit-item">
                    <img src="/public/image/image 151.png" alt="">
                    <div class="statut_nuxt__profit-text">
                       <span>Безопасная оплата</span>
                       <P>Плати безопасно и легко онлайн на нашем сайте.</P>
                    </div>
                </div>
                <div class="statut_nuxt__profit-item">
                    <img src="/public/image/image 150.png" alt="">
                    <div class="statut_nuxt__profit-text">
                       <span>Безопасная оплата</span>
                       <P>Плати безопасно и легко онлайн на нашем сайте.</P>
                    </div>
                </div>
                <div class="statut_nuxt__profit-item">
                    <img src="/public/image/image 149.png" alt="">
                    <div class="statut_nuxt__profit-text">
                       <span>Бонусная программа</span>
                       <P>Дополнительная скидка 15% при регистрации</P>
                    </div>
                </div>
                <div class="statut_nuxt__profit-item">
                    <img src="/public/image/image 152.png" alt="">
                    <div class="statut_nuxt__profit-text">
                       <span>Большой выбор</span>
                       <P>Ежегодно выходит в свет более 100 книг</P>
                    </div>
                </div>

            </div>
        </div>
    </section>


</template>

<style scoped>
.statut_nuxt__profit{
    background-color: rgba(249, 249, 250, 1);
    padding-bottom: 30px;
}


.statut_nuxt__profit-block{
    display: flex;
    justify-content: space-between;
    gap:30px

}

.statut_nuxt__profit-item{
    display: flex;
    background-color: white;
    padding: 42px 20px;
    border-radius: 5px;
    width: 100%;
    height: 150px;
}

img{
    margin-left: -20px;
}

.statut_nuxt__profit-text{
    margin-left: -15px;
}

span{
    font-weight: 700;
    font-size: 16px;
    color: rgba(28, 41, 77, 1);
    line-height: 25px;
    
}

p{
    font-weight: 400;
    font-size: 12px;
    color: rgba(114, 114, 114, 1);
    line-height: 19px;
}

@media (max-width: 768px){
    .statut_nuxt__profit-block{display: block;}
    .statut_nuxt__profit-item{margin-bottom: 10px;}
}
</style>