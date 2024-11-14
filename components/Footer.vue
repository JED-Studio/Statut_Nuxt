<script>
import { defineComponent } from 'vue'

export default defineComponent({
  
  
    setup(){


        const toggleHeight = (id) => {
            const element = document.getElementById(id);
            if(element.style.height === '60px' ||  element.style.height === ''){
                element.style.height = element.scrollHeight + 'px';
            } else {
                element.style.height = '60px';
            }
        }



        const footer = [
            {
                id: 1,
                title: 'Покупателям',
                linksa: [
                    {
                        type: 'Наша почта',
                        href: '#'
                    },
                    {
                        payment: 'Оплата и доставка',
                        href: '#'
                    },
                    {
                        question: 'Вопросы и ответы',
                        href: '#'
                    }
                ]
            },
            {
                id: 2,
                title: 'Издательство',
                linksa: [
                    {
                        type: 'О компании',
                        href: '#'
                    },
                    {
                        payment: 'Авторам',
                        href: '#'
                    },
                    {
                        question: 'Вакансии',
                        href: '#'
                    },
                    {
                        author: 'Контакты',
                        href: '#'
                    }
                ]
            },
            {
                id: 3,
                title: 'Книги',
                linksa: [
                    {
                        type: 'Все категории',
                        href: '#'
                    },
                    {
                        payment: 'Бестеллеры',
                        href: '#'
                    },
                    {
                        question: 'Новинки',
                        href: '#'
                    },
                    {
                        author: 'Скидки и акции',
                        href: '#'
                    }
                ]
            },
            {
                id: 4,
                title: 'Прайс-лист',
                linksa: [
                    {
                        type: 'Наша почта',
                        href: '#'
                    },
                    {
                        payment: 'Оплата и доставка',
                        href: '#'
                    },
                    {
                        question: 'Вопросы и ответы',
                        href: '#'
                    }
                ]
            }
        ]

        return {
            footer,  
            toggleHeight,
            
        }
    }
})
</script>

<template>
    <div class="statut_nuxt__footer">
        <div class="statut_nuxt__container">
            <div class="statut_nuxt__footer-flex">
                <div v-for="links in footer" :key="links" :id="links.id" :title="links.title"  :linksa="links.linksa" class="statut_nuxt__footer-item">
                    <div @click="toggleHeight(links.id)"  class="statut_nuxt__footer-item-flex">
                        <h4>{{ links.title }}</h4>
                        <img class="statut_nuxt__footer-item-image" src="/assets/icons/Chevron Right 1 - 24px.svg" alt="">
                    </div>
                    <ul class="statut_nuxt__footer-item-margin">
                        <li v-for="link in links.linksa" :key="link" :type="link.type" :href="link.href" :payment="link.payment" :question="link.question" :author="link.author">
                            <a :href="link.href">{{ link.type }}</a>
                            <a :href="link.href">{{ link.payment }}</a>
                            <a :href="link.href">{{ link.question }}</a>
                            <a :href="link.href">{{ link.author }}</a>
                        </li>
                     
                    </ul>
                </div>
              
                
                
                <div class="statut_nuxt__footer-contact">
                    <h4 class="statut_nuxt__footer-contact-title">Телефон и Email</h4>
                    <div class="statut_nuxt__footer-contact-flex">
                    <div class="statut_nuxt__footer-contact-mail">
                        <img src="/assets/icons/Communication 1 - 24px.svg" alt="">
                        <a class="statut_nuxt__footer-a">market@estatut.ru</a>
                    </div>
                    <div class="statut_nuxt__footer-contact-mail">
                        <img src="/assets/icons/Device 32 - 24px.svg" alt="">
                        <a class="statut_nuxt__footer-a">8 (968) 660-65-50</a>
                        <img src="/assets/icons/icon6.svg" alt="">
                    </div>
                </div>
                </div>
            </div>

            <div class="statut_nuxt__footer-bottom">
                <div class="statut_nuxt__footer-bottom-">
                <div class="statut_nuxt__footer-bottom-text">© 2020 Издательство «Статут»</div>
                <div class="statut_nuxt__footer-bottom-adress">ул. Лобачевского, 92, корп. 2 119454, г. Москва</div>
            </div>
            <div class="">
                <div class="statut_nuxt__footer-bottom-policy">Политика конфиденциальности</div>
                <div class="statut_nuxt__footer-bottom-offer">Договор оферты</div>
            </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.statut_nuxt__footer-flex{
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding: 45px 0px;
    border-bottom: 1px solid rgba(223, 224, 225, 1);
}

.statut_nuxt__footer-item-margin{
    display: flex;
    flex-direction: column;
    gap: 15px;
    
}

.statut_nuxt__footer-item{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 165px;
}

.statut_nuxt__footer-contact-flex{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.statut_nuxt__footer-contact{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 165px;
}

.statut_nuxt__footer-item-image{
    display: none;
}

ul{
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
}

.statut_nuxt__footer-bottom{
    padding: 40px 0px 45px 0px
}

.statut_nuxt__footer-bottom-text{color: rgba(28, 41, 77, 0.5);}

h4{
    color: rgba(28, 41, 77, 1);
    font-size: 14px;
    font-family: 500;
}

.statut_nuxt__footer-a{
    color: rgba(28, 41, 77, 0.8);
}

a{
    font-weight: 400;
    font-size: 14px;
    color: rgba(40, 47, 54, 0.8);
    text-decoration: none;
}

.statut_nuxt__footer-contact-mail{
    display: flex;
    align-items: center;
    gap: 5px;
}

.statut_nuxt__footer-bottom{
    display: flex;
    align-items: center;
}

.statut_nuxt__footer-bottom-adress,
.statut_nuxt__footer-bottom-policy,
.statut_nuxt__footer-bottom-offer{
    font-size:14px;
    font-weight: 400;
}

.statut_nuxt__footer-bottom-text{
    margin-right: 208px;
}



@media(max-width: 767px){
    .statut_nuxt__footer-flex{
        flex-direction: column;
        gap: 0;
    }
    
    .statut_nuxt__footer-contact-title{
        display: none;
    }
.statut_nuxt__footer-contact-mail{
    border-bottom: 1px solid rgba(42, 61, 72, 0.15);
    padding: 20px 0px;
    
}


.statut_nuxt__footer-contact-flex{
    display: block;
}

.statut_nuxt__footer-contact{
    width: 100%;
    display: block;
}
    
    .statut_nuxt__footer-item{
       
        overflow: hidden;
        height: 60px;
        padding: 20px 0px;
        transition: height 0.5s;
        border-bottom: 1px solid rgba(42, 61, 72, 0.15);
        width: 100%;
    }

    .statut_nuxt__footer-item-image{
        display: block;
    }

    .statut_nuxt__footer-item-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .statut_nuxt__footer-item-margin{
        
    }

    img{
        display: block;
    }

    li{
        

    }

    .statut_nuxt__footer-item-image{
        transform: rotate(270deg);
        width: 20px;
        height: 20px;
    }
}

</style>