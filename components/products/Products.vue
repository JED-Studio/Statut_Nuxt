<script>

import { defineComponent, ref } from 'vue' 
import ProductsCard from '../products/ProductsCard.vue';
import { items } from '../composables/utils/products.js'

export default defineComponent({
    
    components: {
        ProductsCard
    },

setup(){

return {
    items: items
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


                <ProductsCard 
                v-for="item in items" 
                :key="item" 
                :id="item.id"
                :title="item.title" 
                :description="item.description" 
                :author="item.author"
                :price="item.price"
                :star="item.star"
                :recomend="item.recomend"
                :image="item.image"
                :bestseller="item.bestseller"
                :stocks="item.stocks"
                :discount="item.discount"
                :oldprice="item.oldprice"
                :pricediscount="item.pricediscount"
                />
               

            
               

             </div>

             <div class="statut_nuxt__all-sections">
                <span class="statut_nuxt__all-sections-text">Показать все книги раздела</span>
             </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
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
    border-top: 1px solid rgba(28, 41, 77, 0.15);
}

.statut_nuxt__all-sections-text{
    font-size: 14px;
    font-weight: 500;
    color: rgba(28, 41, 77, 1);
}

</style>