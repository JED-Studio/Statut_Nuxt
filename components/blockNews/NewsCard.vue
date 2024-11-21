<script>
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        
            title: String,
            description: String,
            author: String,
            price: Number,
            image: String
    }
})

</script>


<template>
    <div class="statut_nuxt__card-item" >
                    <div class="statut_nuxt__news">
                    <div class="statut_nuxt__width-img">
                        <img class="statut_nuxt__news-img" v-bind:src="image" alt="">
                    </div>
                    <div class="statut_nuxt__width-text">
                        <p class="statut_nuxt__width-title">{{ title }}</p>
                        <p class="statut_nuxt__news-description">{{ description }}</p>
                        <p class="statut_nuxt__news-author">{{ author }}</p>
                    </div>
                  
                    
                 <ButtonRead />
                  </div>
                </div>
</template>
<style scoped>
.statut_nuxt__card-item{
    padding: 20px 34px 21px 34px;
  
    min-width: calc(1167px / 3);
}

.statut_nuxt__card-item:nth-child(n+1){
    border-left: 1px solid rgba(28, 41, 77, 0.15);
}

.statut_nuxt__card-item:nth-child(1){
    border-left: none;
}


.statut_nuxt__news{

    
}

.statut_nuxt__news-img{
    width: 100%;
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

.statut_nuxt__news-description{
    font-size: 16px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
    line-height: 20px;
    margin-bottom: 8px;
}

.statut_nuxt__news-author{
    font-size: 14px;
    font-weight: 400;
    color: rgba(28, 41, 77, 1);
    line-height: 20px;
    margin-bottom: 12px;
}

.statut_nuxt__width-price{
    font-size: 18px;
    font-weight: 700;
    color: rgba(28, 41, 77, 1);
    line-height: 20px;
    margin-bottom: 10px;
}

@media(max-width: 768px){
   
}



</style>