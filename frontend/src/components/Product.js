import React from 'react';
import './Product.css';


function Product({ id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const product = {
    id: id,
    image: image,
    title: title,
    
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    // console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }

    setTimeout(() => {
      setMessage('Подтвердите участие.')
      setModalBox('MessageBox')
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => addToBasket()}>Вступить</button>
        </>
      )
    } else {
      return (
        <>
          <p>Для участия необходима авторизация</p>
        </>
      )
    }
  }

  return (
    <div className="Product">
      
      <img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hogwarts_castle.jpg/640px-Hogwarts_castle.jpg" alt='Изображение товара' />
      <h1>{product.title}</h1>
      <AddToBasketButton />

    </div>
  );
}

export default Product;