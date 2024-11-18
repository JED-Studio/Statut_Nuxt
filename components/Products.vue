<script>

import { defineComponent, ref } from 'vue' 
import ProductsCard from './ProductsCard.vue';

export default defineComponent({
    
    components: {
        ProductsCard
    },

setup(){




    const items = [
        {
            id: 1,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: 4450,
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/image 142.png',
            bestseller: 'Бестселлер',
            stocks: 'В наличии',
            discount: 'Скидка 10%'
        },
        {
            id: 2,
            title: 'Договорное право',
            description: 'Договор коммерческой концессии (франчайзинг). Граж...',
            author: 'Багдасарян А.Ф.',
            price: 372,
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/imageRo.png',
        },
        {
            id: 3,
            title: 'Конкурентное право',
            description: 'Договор коммерческой концессии (франчайзинг). Граж...',
            author: 'Башлаков-Николаев И.В.',
            price: 984,
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/image145.png',
        },
        {
            id: 4,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/image 142.png',
        },
        {
            id: 5,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/image 142.png',
        },
        {
            id: 6,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89,
            image: '/Statut_Nuxt/assets/public/image/image 142.png',
        },
        

]


return {
    items
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