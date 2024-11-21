<script>
import { defineComponent } from 'vue'

export default defineComponent({
    
    setup(){

        


    }
})
</script>

<template>
    <form class="kanspark__form">
                <div class="kanspark__input">
                    <input type="text" placeholder="Введите свой Email и получите скидку">
                </div>

                <button class="kanspark__search-button">
                    <img src="/assets/icons/Send r_15.svg" alt="Поиск">
                </button>
            </form>
</template>


<style scoped>


.kanspark__form{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid rgba(223, 224, 225, 1);
    width: 100%;
    max-width: 443px;
    height: 40px;
    background-color: white;
}

.kanspark__input{
    flex-grow: 1;
}

.kanspark__search-button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 1px solid rgba(255, 122, 0, 1);
    background-color: rgba(255, 122, 0, 1);
    height: calc(100% + 2px);
    border-radius: 0px 5px 5px 0px;
    margin: -1px -2px -1px 0;
    width: 50px;
}



input{
    width: 100%;
    padding-left: 15px;
    outline:none;
    border: none;
}


input::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    line-height: 14px;
    letter-spacing: 5%;
  }


</style>