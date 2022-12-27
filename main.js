function total(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.price')
    let totalPrice = 0
  
    cartItems.forEach(function (item){
        const amount = item.querySelector('[data-counter]');
        const price = item.querySelector('.price__currency');
        const currentPrice = parseInt(amount.innerText) * parseInt(price.innerText);
        totalPrice += currentPrice
    })
    totalPriceEl.innerText = totalPrice
    
  
  }
  window.addEventListener('click', function (event){
    if (event.target.dataset.action === 'plus') {
        console.log('Plus');
  
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper)
  
        const counter = counterWrapper.querySelector('[data-counter]')
        console.log(counter)
  
        counter.innerText = ++counter.innerText;
    }
  
    
    if (event.target.dataset.action === 'minus') {
        console.log('Minus');
  
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper)
  
        const counter = counterWrapper.querySelector('[data-counter]')
        console.log(counter)
  
        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
    }
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) == 1 ) {
        event.target.closest('.cart-item').remove();
        console.log(toggleCartStatus())
        total()
    }
    
        }
  
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        total()
    }
    
  });
  function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    
    
    if(cartWrapper.children.length > 0 ){
      console.log("Full")
      cartEmptyBadge.classList.add('none')
      orderForm.classList.remove('none')
    }
    else{
      console.log("Empty")
      cartEmptyBadge.classList.remove('none');
      orderForm.classList.add('none');
    }
    
    }
    
    
    
    const cartWrapper = document.querySelector('.cart-wrapper');
    
    window.addEventListener('click', function (event) {
    
    
      if (event.target.hasAttribute('data-cart')){
    
    
          const card = event.target.closest('.card');
          
          const productInfo = {
              id: card.dataset.id,
              imgSrc: card.querySelector('.product-img').getAttribute('src'),
              title: card.querySelector('.item-title').innerText,
              price: card.querySelector('.price__currency').innerText,
              counter: card.querySelector('[data-counter]').innerText,
    
          }
    
          //Проверить есть ли схожий продукт
          
          const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    
          //Если есть то выполнять следующее действие
          if (itemInCart){
              const counterElement = itemInCart.querySelector('[data-counter]');
              counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
          }
          else{
    
          
    
    
                  const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                  <div class="cart-item__top">
                      <div class="cart-item__img">
                          <img src="${productInfo.imgSrc}" alt="">
                      </div>
                      <div class="cart-item__desc">
                          <div class="cart-item__title">${productInfo.title}</div>
                          <!-- cart-item__details -->
                          <div class="cart-item__details">
                              <div class="items items--small counter-wrapper">
                                  <div class="items__control" data-action="minus">-</div>
                                  <div class="items__current" data-counter="">${productInfo.counter}</div>
                                  <div class="items__control" data-action="plus">+</div>
                              </div>
                              <div class="price">
                                  <div class="price__currency">${productInfo.price}</div>
                              </div>
                          </div>
                          <!-- // cart-item__details -->
                      </div>
                  </div>
              </div>`;
    
              
              
    
              cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    
          }
          toggleCartStatus()
          total()
    
    
      }
    })
  