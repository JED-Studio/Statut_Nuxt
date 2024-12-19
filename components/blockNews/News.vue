<script>

import { defineComponent} from 'vue' 
import NewsCard from '../blockNews/NewsCard.vue';
import { news } from '../composables/utils/news.js'

export default defineComponent({
    
    components: {
        NewsCard
    },

setup(){

return {
    news: news
}

}
})
</script>


<template>
    <section class="statut_nuxt__products">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__goods">
             <div class="statut_nuxt__receipts">
                <span class="statut_nuxt__receipts-text">Новые поступления</span>
                
                <ButtonLeftRight />
             </div>

             <div class="statut_nuxt__card">
                


                <NewsCard
                v-for="item in news" 
                :key="item" 
                :id="item.id"
                :title="item.title" 
                :description="item.description" 
                :author="item.author"
                :price="item.price"
                :image="item.image"
                />
               

            
            
             </div>

        

            </div>
        </div>
    </section>
</template>

<style>
.statut_nuxt__products{
    background-color: rgba(249, 249, 250, 1);
    padding-bottom: 30px;
}

.statut_nuxt__goods{
    border-radius: 5px;
    background-color: white;
}

.statut_nuxt__receipts{
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(28, 41, 77, 0.15);
    
    
}

.statut_nuxt__receipts-text{
    font-size: 20px;
    font-weight: 700;
    color: rgba(28, 41, 77, 1);
}


.statut_nuxt__card{
    width: 100%;
    display: flex;
    overflow-x: auto;
}

.statut_nuxt__card::-webkit-scrollbar{
    display: none;
}

.statut_nuxt__all-sections{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
}

.statut_nuxt__all-sections-text{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
}

</style>