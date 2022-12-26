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