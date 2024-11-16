<script>
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        
            title: String,
            description: String,
            author: String,
            price: Number,
            star: Number,
            recomend: Number,
            image: String
    }
})

</script>


<template>
    <div class="statut_nuxt__card-item" >
                    <div class="statut_nuxt__width">
                    <div class="statut_nuxt__width-img">
                        <img v-bind:src="image" alt="">
                    </div>
                    <div class="statut_nuxt__width-text">
                        <p class="statut_nuxt__width-title">{{ title }}</p>
                        <p class="statut_nuxt__width-description">{{ description }}</p>
                        <p class="statut_nuxt__width-author">{{ author }}</p>
                        <p class="statut_nuxt__width-price">{{ price }} ₽</p>
                    </div>
                    <div class="statut_nuxt__evaluations">
                        <div class="statut_nuxt__star"> <img src="/assets/icons/Star 2.svg" alt="">{{ star }}</div>
                        <div class="statut_nuxt__recomend"> <img src="/assets/icons/Interface.svg" alt=""> {{ recomend }}% рекомендуют</div>
                    </div>
                    <div class="statut_nuxt__buttons-item">
                        <div class="statut_nuxt__basket">
                            <img src="/assets/icons/icon 1 - 24px.svg" alt="">
                            <p class="statut_nuxt__basket-text">В корзина</p>
                        </div>
                        <div class="statut_nuxt__selected">
                            <img src="/assets/icons/icon7.svg" alt="">
                        </div>
                    </div>
                  </div>
                </div>
</template>

<style>
.statut_nuxt__card-item{
    padding: 20px 34px 21px 34px;
  
    width: 100%;
}

.statut_nuxt__card-item:nth-child(n+1){
    border-top: 1px solid rgba(28, 41, 77, 0.15);
    border-bottom: 1px solid rgba(28, 41, 77, 0.15);
    border-left: 1px solid rgba(28, 41, 77, 0.15);
}

.statut_nuxt__card-item:nth-child(1){
    border-left: none;
}


.statut_nuxt__width{
    width: 223px;
    
}

.statut_nuxt__width-img{
    text-align: center;
}

.statut_nuxt__width-text{
    margin-top: 15px;
}

.statut_nuxt__width-title{
    font-size: 12px;
    font-weight: 400;
    color: rgba(28, 41, 77, 0.5);
    line-height: 15px;
    margin-bottom: 8px;
}

.statut_nuxt__width-description{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
    line-height: 19px;
    margin-bottom: 8px;
}

.statut_nuxt__width-author{
    font-size: 12px;
    font-weight: 400;
    color: rgba(28, 41, 77, 1);
    line-height: 15px;
    margin-bottom: 8px;
}

.statut_nuxt__width-price{
    font-size: 18px;
    font-weight: 700;
    color: rgba(28, 41, 77, 1);
    line-height: 20px;
    margin-bottom: 10px;
}





.statut_nuxt__evaluations{
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}

.statut_nuxt__star{
    display: flex;
    font-size: 12px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff1e4;
    padding: 5px 8px;
    color: rgba(251, 192, 45, 1);
    gap: 4px;
    align-items: center;
}

.statut_nuxt__recomend{
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #dee0ea;
    border-radius: 5px;
    padding: 5px 10px;
    color: rgba(121, 134, 203, 1);
    font-size: 12px;
    font-weight: 500;
}

.statut_nuxt__buttons-item{
    display: flex;
    gap: 10px;
}

.statut_nuxt__basket{
    display: flex;
    padding: 10px 25px;
    border-radius: 5px;
    border: 2px solid #eeeeee;
    align-items: center;
    gap: 10px;
}

.statut_nuxt__basket-text{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
}

.statut_nuxt__selected{
    display: flex;
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid #eeeeee;
}
</style>