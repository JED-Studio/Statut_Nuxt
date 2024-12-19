<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
    
    setup(){
        const items = ref([
            'image/Group 1014.png',
            'image/Group 1014.png',
            'image/Group 1014.png',
            'image/Group 1014.png',
            'image/Group 1014.png',
        ])

        const currentIndex = ref(0)

        const prevSlide = () =>{
            currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
        }

        const nextSlide = () =>{
            currentIndex.value = (currentIndex.value + 1) % items.value.length;

        }

        const polos = (index) =>{
            currentIndex.value = index
        }

        return{
            items,
            polos,
            prevSlide,
            nextSlide,
            currentIndex,

            
        }
    }
})
</script>

<template>
     <div class="statut_nuxt__stock-slider">
                <div class="statut_nuxt__stock-images" >
                    <img v-for="(item, index) in items" :key="index" :src="item" class="images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" alt="">
                </div>
                    <div class="statut_nuxt__stock-slider-button">

                       <div class="statut_nuxt__stock-slider-left" @click="prevSlide">
                        <img class="statut_nuxt__stock-slider-img" src="/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                       <div class="statut_nuxt__stock-slider-right" @click="nextSlide">
                        <img class="statut_nuxt__stock-slider-img" src="/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                    </div>
                    <div class="statut_nuxt__stock-slider-pols">
                       <div v-for="(item, index) in items" :key="index" :item="item" class="statut_nuxt__stock-pol" @click ="polos(index)"  :class="{ active: currentIndex === index }"></div>
                    </div>
                </div>
</template>

<style scoped>
.statut_nuxt__stock-slider-img{
    width: 20px;
    height: 20px;
}

.statut_nuxt__stock-slider-right > img{
    transform: rotate(180deg);
}



.statut_nuxt__stock-pol{
    border-radius: 2px;
    width: 25px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.85);
}

.statut_nuxt__stock-slider-pols{
    transform: translate(-50%, -50%);
    left: 50%;
    top: 90%;
    position: absolute;
    max-width: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;
}


.active{
    background-color: black;
}


.statut_nuxt__stock-slider{
    overflow: hidden;
    grid-column: 1 / 3;
    border-radius: 5px;
}

.statut_nuxt__stock-slider{
   position: relative;
   width: 100%;
}


.statut_nuxt__stock-images{
    display: flex;
    
    height: 100%;
}

.statut_nuxt__stock-images::-webkit-scrollbar{
    display: none;
}


.statut_nuxt__stock-slider-button{
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: absolute;
    max-width: 750px;
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.images{
    width: 100%;
    transition: 0.2s all;
}

.statut_nuxt__stock-slider-left{
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    margin-left: 28px;
}
.statut_nuxt__stock-slider-right{
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    margin-right: 28px;
}

@media(max-width: 768px){
    .statut_nuxt__stock-slider{margin-bottom: 10px;}

    .statut_nuxt__stock-slider-button{
        display: none;
    }
}
</style>