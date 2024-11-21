<template>
    <section class="statut_nuxt__mailing">

<div class="statut_nuxt__container">
    <div class="statut_nuxt__mailing-block">
        <div class="statut_nuxt__mailing-title">
            <p class="statut_nuxt__mailing-text">Скидка <span class="statut_nuxt__mailing-price">200 ₽</span> при подписке на рассылку Издательства</p>
        </div>
        <div class="statut_nuxt__mailing-input">
            <input type="text" placeholder="Введите ваш e-mail">
        </div>
        <div class="statut_nuxt__mailing-button">
            <span class="statut_nuxt__mailing-button-text">Подписаться</span>
        </div>
    </div>
</div>
</section>
</template>

<style scoped>
.statut_nuxt__mailing{
    padding-bottom: 30px;
    background-color: rgba(249, 249, 250, 1);
}

.statut_nuxt__mailing-block{
    display: flex;
    align-items: center;
    background-color: rgba(2, 136, 209, 1);
    border-radius: 5px;
    height: 105px;
    padding: 33px 45px;
}


.statut_nuxt__mailing-title{margin-right: 14px;}



.statut_nuxt__mailing-text{
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    position: relative;
    z-index: 1;
}

.statut_nuxt__mailing-price{
    font-weight: 700;
    position: relative;

}

.statut_nuxt__mailing-price::after{
    content: url('/public/image/Vector 163.png');
    position: absolute;
    z-index: -1;
    top: -3px;
    left: -10px;
}
.statut_nuxt__mailing-input{
    margin-right: 10px;
}

input{
    height: 40px;
    width: 418px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 20px;
}


.statut_nuxt__mailing-button{
    padding: 10px 25px;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 5px;
    width: 137px;
    color: rgba(255, 255, 255, 1);
    transition:background-color 0.2s linear,color 0.2s linear, fill 0.2s linear;
    cursor: pointer;
}

.statut_nuxt__mailing-button:hover{
    background-color: rgba(255, 255, 255, 1);
    color: black;
}

.statut_nuxt__mailing-button-text{
    font-size: 14px;
    font-weight: 500;
   
}

@media(max-width: 768px){
    .statut_nuxt__mailing-title{
        margin-bottom: 10px;
    }

    input{
        width: 100%;
    }

    .statut_nuxt__mailing-input{
        margin-bottom: 10px;
        margin-right: 0;
    }
    .statut_nuxt__mailing-block{
        display: block;
        height: 190px;
        padding: 20px 10px;
    }

    .statut_nuxt__mailing-button{
        width: 100%;
        text-align: center;
    }
}
</style>