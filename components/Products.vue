<script>

import { defineComponent, ref } from 'vue' 
import ProductsCard from './ProductsCard.vue';

export default defineComponent({
    
    components: {
        ProductsCard
    },

setup(){




    const items = ref([
        {
            id: 1,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: 4450,
            star: 4.9,
            recomend: 89

        },
        {
            id: 2,
            title: 'Договорное право',
            description: 'Договор коммерческой концессии (франчайзинг). Граж...',
            author: 'Багдасарян А.Ф.',
            price: 372,
            star: 4.9,
            recomend: 89

        },
        {
            id: 3,
            title: 'Конкурентное право',
            description: 'Договор коммерческой концессии (франчайзинг). Граж...',
            author: 'Башлаков-Николаев И.В.',
            price: 984,
            star: 4.9,
            recomend: 89

        },
        {
            id: 4,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89

        },
        {
            id: 5,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89

        },
        {
            id: 6,
            title: 'Корпоративное право',
            description: 'Инвестирование: способы, риски, субъекты : монография',
            author: 'Майфат А.В.',
            price: '450',
            star: 4.9,
            recomend: 89

        },
        

])


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
                <div class="statut_nuxt__switching">
                    <button class="statut_nuxt__left"><img src="/assets/icons/Chevron Right 1 - 24px.svg" alt=""></button>
                    <button class="statut_nuxt__right"><img src="/assets/icons/Chevron Right 1 - 24px.svg" alt=""></button>
                </div>
             </div>

             <div class="statut_nuxt__card">


                <ProductsCard 
                v-for="item in items" 
                :key="item" 
                :title="item.title" 
                :description="item.description" 
                :author="item.author"
                :price="item.price"
                :star="item.star"
                :recomend="item.recomend"
                />
               

            
               

             </div>

             <div class="statut_nuxt__all-sections">
                <span class="statut_nuxt__all-sections-text">Показать все книги раздела</span>
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
    margin: 0px 25px;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.statut_nuxt__receipts-text{
    font-size: 20px;
    font-weight: 700;
    color: rgba(28, 41, 77, 1);
}

.statut_nuxt__switching{
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgba(28, 41, 77, 0.15);
    
}

.statut_nuxt__left{
    padding: 10px;
    display: flex;
    align-items: center;
    border: none;
    background: none;
}

.statut_nuxt__right{
    padding: 10px;
    display: flex;
    align-items: center;
    border: none;
    background: none;
}

.statut_nuxt__card{
    width: 100%;
    display: flex;
    overflow-x: auto;
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

.statut_nuxt__card-item{
    padding: 20px 34px 21px 34px;
    border: 1px solid rgba(28, 41, 77, 0.15);
    width: 100%;
}



.statut_nuxt__width{
    width: 223px;
    
}

.statut_nuxt__evaluations{
    display: flex;
    gap: 10px;
}

.statut_nuxt__star{
    display: flex;
    border-radius: 5px;
    background-color: #fff1e4;
    padding: 5px 8px;
}

.statut_nuxt__recomend{
    display: flex;
    background-color: #dee0ea;
    border-radius: 5px;
    padding: 5px 10px;
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
}

.statut_nuxt__selected{
    display: flex;
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid #eeeeee;
}
</style>