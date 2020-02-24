'use strict';
function Project(){
    const stage1 = document.getElementById('stage1');
    const stage2 = document.getElementById('stage2');
    const stage3 = document.getElementById('stage3');
    const stage4 = document.getElementById('stage4');
    const stage5 = document.getElementById('stage5');
    const stage6 = document.getElementById('stage6');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    const num4 = document.getElementById('num4');
    const num5 = document.getElementById('num5');
    const num6 = document.getElementById('num6');
    const numbers = document.querySelectorAll('.project__stage-number');
    const modal = document.querySelector('.project__modal');

    stage1.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num1.style.color = '#EF8B54';
            num1.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage1.querySelector('.project__modal-mobile');
            const mobileButton=stage1.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage1.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num1.style.color = '#EF8B54';
            }
        }
    });
    stage2.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num2.style.color = '#EF8B54';
            num2.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage2.querySelector('.project__modal-mobile');
            const mobileButton=stage2.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage2.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num2.style.color = '#EF8B54';
            }
        }
    });
    stage3.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num3.style.color = '#EF8B54';
            num3.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage3.querySelector('.project__modal-mobile');
            const mobileButton=stage3.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage3.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num3.style.color = '#EF8B54';
            }
        }
    });
    stage4.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num4.style.color = '#EF8B54';
            num4.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage4.querySelector('.project__modal-mobile');
            const mobileButton=stage4.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage4.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num4.style.color = '#EF8B54';
            }
        }
    });
    stage5.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num5.style.color = '#EF8B54';
            num5.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage5.querySelector('.project__modal-mobile');
            const mobileButton=stage5.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage5.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num5.style.color = '#EF8B54';
            }
        }
    });
    stage6.addEventListener('click', () => {
        if(document.documentElement.clientWidth> 1024){
            for (let i = 0; i < numbers.length; i++){
                numbers[i].style.opacity = '0.1';
                numbers[i].style.color = '#fff';
            }
            num6.style.color = '#EF8B54';
            num6.style.opacity = '1';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        else{
            const mobileModal=stage6.querySelector('.project__modal-mobile');
            const mobileButton=stage6.querySelector('.project__button');
            mobileButton.style.transform = 'rotate(180deg)';
            if(mobileModal){
                mobileModal.parentNode.removeChild(mobileModal);
                mobileButton.style.transform = 'rotate(360deg)';
                for (let i = 0; i < numbers.length; i++){
                    numbers[i].style.color = '#393939';
                }
            } else {
                stage6.innerHTML+='<p class="project__modal-mobile">Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.</p>';
                num6.style.color = '#EF8B54';
            }
        }
    });

    const closeBtn = document.querySelector('.project__modal-close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    });
}

function Features(){
    // Работа со слайдером features
    const secureBtn = document.getElementById('secure-span');
    const crmBtn = document.getElementById('crm-span');
    const payBtn = document.getElementById('pay-span');
    const secureBlock = document.getElementById('secure');
    const crmBlock = document.getElementById('crm');
    const payBlock = document.getElementById('pay');
    // Выбор блока по кнопке
    secureBtn.addEventListener('click', () => {
        secureBlock.style.display = 'flex';
        crmBlock.style.display = 'none';
        payBlock.style.display = 'none';
        secureBtn.style.color = '#EF8B54';
        crmBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        payBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
    crmBtn.addEventListener('click', () => {
        crmBlock.style.display = 'flex';
        secureBlock.style.display = 'none';
        payBlock.style.display = 'none';
        crmBtn.style.color = '#EF8B54';
        secureBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        payBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
    payBtn.addEventListener('click', () => {
        payBlock.style.display = 'flex';
        crmBlock.style.display = 'none';
        secureBlock.style.display = 'none';
        payBtn.style.color = '#EF8B54';
        crmBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        secureBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
    // Смена блоков при клике
    secureBlock.addEventListener('click', () => {
        crmBlock.style.display = 'flex';
        secureBlock.style.display = 'none';
        payBlock.style.display = 'none';
        crmBtn.style.color = '#EF8B54';
        secureBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        payBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
    crmBlock.addEventListener('click', () => {
        payBlock.style.display = 'flex';
        secureBlock.style.display = 'none';
        crmBlock.style.display = 'none';
        payBtn.style.color = '#EF8B54';
        secureBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        crmBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
    payBlock.addEventListener('click', () => {
        secureBlock.style.display = 'flex';
        crmBlock.style.display = 'none';
        payBlock.style.display = 'none';
        secureBtn.style.color = '#EF8B54';
        crmBtn.style.color = 'rgba(255, 255, 255, 0.4)';
        payBtn.style.color = 'rgba(255, 255, 255, 0.4)';
    });
}

function Clients(){
    const number1 = document.getElementById('client1').querySelector('.clients__number');
    const number2 = document.getElementById('client2').querySelector('.clients__number');
    const number3 = document.getElementById('client3').querySelector('.clients__number');
    const number4 = document.getElementById('client4').querySelector('.clients__number');
    const btnLeft = document.querySelector('.clients__btn-left');
    const btnRight = document.querySelector('.clients__btn-right');
    
    btnRight.addEventListener('click', () => {
        if(number1.classList.contains('clients__choosen-number')){
            number1.classList.remove("clients__choosen-number");
            number2.classList.add("clients__choosen-number");
        }
        else if(number2.classList.contains('clients__choosen-number')){
            number2.classList.remove("clients__choosen-number");
            number3.classList.add("clients__choosen-number");
        }
        else if(number3.classList.contains('clients__choosen-number')){
            number3.classList.remove("clients__choosen-number");
            number4.classList.add("clients__choosen-number");
        }
        else{
            number4.classList.remove("clients__choosen-number");
            number1.classList.add("clients__choosen-number");
        }
    });
    btnLeft.addEventListener('click', () => {
        if(number1.classList.contains('clients__choosen-number')){
            number1.classList.remove("clients__choosen-number");
            number4.classList.add("clients__choosen-number");
        }
        else if(number4.classList.contains('clients__choosen-number')){
            number4.classList.remove("clients__choosen-number");
            number3.classList.add("clients__choosen-number");
        }
        else if(number3.classList.contains('clients__choosen-number')){
            number3.classList.remove("clients__choosen-number");
            number2.classList.add("clients__choosen-number");
        }
        else{
            number2.classList.remove("clients__choosen-number");
            number1.classList.add("clients__choosen-number");
        }
    });
}

Project();
Features();
Clients();


