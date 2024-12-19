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
            image: String,
            bestseller: String,
            stocks: String,
            discount: String,
            oldprice: Number,
            pricediscount: Number
    }
})

</script>


<template>
    <div class="statut_nuxt__card-item">
                    <div class="statut_nuxt__width">
                    <div class="statut_nuxt__width-img">
                        <div v-if="bestseller" class="statut_nuxt__width-bestseller">{{ bestseller }}</div>
                        <div v-if="stocks" class="statut_nuxt__width-stocks">{{ stocks }}</div>
                        <div v-if="discount" class="statut_nuxt__width-discount">{{ discount }}</div>
                        <img v-bind:src="image" alt="">
                    </div>
                    <div class="statut_nuxt__width-text">
                        <p class="statut_nuxt__width-title">{{ title }}</p>
                        <p class="statut_nuxt__width-description">{{ description }}</p>
                        <p class="statut_nuxt__width-author">{{ author }}</p>
                        <div class="statut_nuxt__width-prices">
                        <p class="statut_nuxt__width-price">{{ price }} ₽</p>
                        <p v-if="oldprice" class="statut_nuxt__width-old-price"><del>{{ oldprice }} ₽</del></p>
                        <p v-if="pricediscount" class="statut_nuxt__width-price-discount"> {{ pricediscount }} ₽</p>
                        </div>
                    </div>
                    <div class="statut_nuxt__evaluations">
                        <div class="statut_nuxt__star"> <img src="/assets/icons/Star 2.svg" alt="">{{ star }}</div>
                        <div class="statut_nuxt__recomend"> <img src="/assets/icons/Interface.svg" alt=""> {{ recomend }}% рекомендуют</div>
                    </div>
                    <div class="statut_nuxt__buttons-item">
                        <ButtonBasket />
                        <ButtonFavorite />
                       
                    </div>
                  </div>
                </div>
</template>

<style scoped>
del{
    
	position: relative;
	
	text-decoration: none;
}
del::before{
    content: "";
	border-bottom: 1px solid red;
	position: absolute;
	width: 100%;
	height: 56%;
	transform: rotate(-5deg);
}

.statut_nuxt__width-old-price{
    color: rgba(28, 41, 77, 0.5);
    font-weight: 400;
    font-size: 12px;
}

.statut_nuxt__width-price-discount{
    color: rgba(13, 185, 140, 1);
    font-weight: 400;
    font-size: 12px;
}

.statut_nuxt__width-bestseller{
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 5px;
    background-color: rgba(238, 233, 247, 1);
    border-radius: 5px;
    color: rgba(172, 142, 227, 1);
    font-size: 12px;
    font-weight: 500;
}

.statut_nuxt__width-stocks{
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 5px;
    background-color: rgba(226, 246, 236, 1);
    border-radius: 5px;
    color: rgba(61, 196, 126, 1);
    font-size: 12px;
    font-weight: 500;
}

.statut_nuxt__width-discount{
    position: absolute;
    top: 34px;
    left: 0px;
    padding: 5px;
    background-color: rgba(255, 238, 238, 1);
    border-radius: 5px;
    color: rgba(255, 79, 82, 1);
    font-size: 12px;
    font-weight: 500;
}








.statut_nuxt__card-item{
    padding: 20px 34px 21px 34px;
    min-width: calc(1168px / 4);
}

.statut_nuxt__card-item:nth-child(n+1){
    border-left: 1px solid rgba(28, 41, 77, 0.15);
}

.statut_nuxt__card-item:nth-child(1){
    border-left: none;
}


.statut_nuxt__width-img{
    text-align: center;
    position: relative;
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
}

.statut_nuxt__width-prices{
    display: flex;
    gap: 7px;
    margin-bottom: 10px;
    align-items: self-end;
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
    gap: 5px;
}


@media(max-width: 768px){   
    
    .statut_nuxt__card-item{
        padding: 20px 10px;
        min-width: calc(375px / 2);
    }
    
    .statut_nuxt__evaluations{
        display: block;
    }

    .statut_nuxt__star{
        width: 52px;
        margin-bottom: 8px;
    }
    .statut_nuxt__recomend{
        width: 144px;
    }
}
</style>