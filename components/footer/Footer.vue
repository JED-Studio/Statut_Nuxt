<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup(){

       
    }
})
</script>

<template>
    <div class="statut_nuxt__footer">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__footer-flex">
                <div class="statut_nuxt__footer-flex-1">
                <div class="statut_nuxt__footer-item"  >
                    <div class="statut_nuxt__footer-item-flex">
                        <h4>Покупателям</h4>
                        <img class="statut_nuxt__footer-item-image" src="@/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>

                    <ul class="statut_nuxt__footer-item-margin" >
                        <li><a href="#">Наша почта</a></li>
                        <li><a href="#">Оплата и доставка</a></li>
                        <li><a href="#">Вопросы и ответы</a></li>
                      
                     
                    </ul>
            
                </div>
                <div class="statut_nuxt__footer-item">
                    <div @click="toggleHeight"  class="statut_nuxt__footer-item-flex">
                        <h4>Издательство</h4>
                        <img class="statut_nuxt__footer-item-image" src="@/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>

                    <ul class="statut_nuxt__footer-item-margin" >
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Авторам</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Контакты</a></li>
                      
                     
                    </ul>
            
                </div>
                <div class="statut_nuxt__footer-item">
                    <div @click="toggleHeight"  class="statut_nuxt__footer-item-flex">
                        <h4>Книги</h4>
                        <img class="statut_nuxt__footer-item-image" src="@/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>

                    <ul class="statut_nuxt__footer-item-margin" >
                        <li><a href="#">Все категории</a></li>
                        <li><a href="#">Бестеллеры</a></li>
                        <li><a href="#">Новинки</a></li>
                        <li><a href="#">Скидки и акции</a></li>
                      
                     
                    </ul>
            
                </div>
                <div class="statut_nuxt__footer-item">
                    <div @click="toggleHeight"  class="statut_nuxt__footer-item-flex">
                        <h4>Прайс-лист</h4>
                        <img class="statut_nuxt__footer-item-image" src="@/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                    <div class="statut_nuxt__footer-item-pdf">
                    <img src="/assets/icons/File.svg" alt="">
                    <ul class="statut_nuxt__footer-item-margin" >
                        <li class="statut_nuxt__footer-li-pdf"><a href="#">Скачайть прайс-лист</a></li>
                        <li><a  class="statut_nuxt__footer-li-pdf-mb" href="#">PDF, 12 Mb</a></li>
                       
                      
                     
                    </ul>
                </div>
                </div>
            </div>
                
               <FooterMedium />
               
            </div>


            <FooterBottom />

        </div>
    </div>


    
</template>


<style scoped>
.statut_nuxt__footer-li-pdf-mb{
    font-weight: 400;
    font-size: 12px;
    color: rgba(40, 47, 54, 0.5);
}

.statut_nuxt__footer-li-pdf{
    text-wrap: nowrap;
    margin-bottom: 0;
}

.statut_nuxt__footer-item-pdf{
    display: flex;
    align-items: flex-start;
    gap: 10px;
}
.statut_nuxt__footer-item-flex{
    margin-bottom: 24px;
}

.statut_nuxt__footer-flex{
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding: 45px 0px;
    border-bottom: 1px solid rgba(223, 224, 225, 1);
}

.statut_nuxt__footer-flex-1{
    display: flex;
    align-items: flex-start;
    gap: 30px;  
}

.statut_nuxt__footer-item{width: 165px;}

.statut_nuxt__footer-item-image{display: none;}

ul{
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
    margin-bottom: 15px;
}

li:last-child{margin-bottom: 0px;}

h4{
    color: rgba(28, 41, 77, 1);
    font-size: 14px;
    font-family: 500;
}

a{
    font-weight: 400;
    font-size: 14px;
    color: rgba(40, 47, 54, 0.8);
    text-decoration: none;
}


@media(max-width: 767px){
    .statut_nuxt__container{
        padding: 0;
    }

    .statut_nuxt__footer-flex{
        flex-direction: column;
        gap: 0;
        padding: 0;
    }

    .statut_nuxt__footer-flex-1{
        display: block;
        width: 100%;
        padding: 0px 20px;
    }
    .statut_nuxt__footer-bottom-mail-block{
        display: block;
        border-bottom: 1px solid rgba(42, 61, 72, 0.15);
        padding: 20px 0px;
    }

  
    .statut_nuxt__footer-item{
        overflow: hidden;
        height: 60px;
        padding: 20px 0px;
        transition: height 0.5s;
        border-bottom: 1px solid rgba(42, 61, 72, 0.15);
        width: 100%;
    
    }

    .statut_nuxt__footer-item:last-child{
        border: none;
    }

    .statut_nuxt__footer-item-image{
        display: block;
    }

    .statut_nuxt__footer-item-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
  
    img{
        display: block;
    }

    .statut_nuxt__footer-item-image{
        transform: rotate(270deg);
        width: 20px;
        height: 20px;
    }


   
}

</style>