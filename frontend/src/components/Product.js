import React from 'react';
import './Product.css';


function Product({ id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
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
      setMessage('Товар добавлен в корзину.')
      setModalBox('MessageBox')
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => addToBasket()}>Добавить</button>
        </>
      )
    } else {
      return (
        <>
          <p>Для заказа необходима авторизация</p>
        </>
      )
    }
  }

  return (
    <div className="Product">
      
      <img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hogwarts_castle.jpg/640px-Hogwarts_castle.jpg" alt='Изображение товара' />
      <h1>{product.title}</h1>
      <p>{product.price} ₽</p>
      <AddToBasketButton />

    </div>
  );
}

export default Product;