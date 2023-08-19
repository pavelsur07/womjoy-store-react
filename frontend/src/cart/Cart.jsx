import * as React from 'react'

export function Cart() {
  return (
    <>
      <div className="wrapper">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Главная</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Корзина
            </li>
          </ol>
        </nav>
        <div className="cart__top">
          <h1 className="cart__title title-xl">Корзина</h1>
          <button className="cart__clear" type="button">
            <img src="./img/icons/cart-remove.svg" alt="" width="20" height="20" />
            Очистить корзину
          </button>
        </div>
        <div className="cart__content">
          <div className="cart__left">
            <div className="cart__items">
              <div className="c-item">
                <a href="#" className="c-item__img">
                  <span className="c-item__img_in">
                    <img src="./img/cart-item-img.png" alt="" width="83" height="110" />
                  </span>
                </a>
                <div className="c-item__main">
                  <div className="c-item__text">
                    <a href="#" className="c-item__name">
                      Лонгслив женский
                    </a>
                    <span className="c-item__size">Размер: М</span>
                  </div>
                  <div className="c-item__actions">
                    <button className="c-item__action c-item__minus" type="button">
                      <img src="./img/icons/minus.svg" alt="" width="24" height="24" />
                    </button>
                    <input type="text" className="c-item__inp" value="1" />
                    <button className="c-item__action c-item__plus" type="button">
                      <img src="./img/icons/plus.svg" alt="" width="24" height="24" />
                    </button>
                  </div>
                  <div className="c-item__price">
                    <span className="c-item__cost">1 299 ₽</span>
                    <del className="c-item__disc">1 299 ₽</del>
                  </div>
                </div>
              </div>
              <div className="c-item">
                <a href="#" className="c-item__img">
                  <span className="c-item__img_in">
                    <img src="./img/cart-item-img.png" alt="" width="83" height="110" />
                  </span>
                </a>
                <div className="c-item__main">
                  <div className="c-item__text">
                    <a href="#" className="c-item__name">
                      Лонгслив женский спортивный укороченный Womjoy Classic Logo Black
                    </a>
                    <span className="c-item__size">Размер: М</span>
                  </div>
                  <div className="c-item__actions">
                    <button className="c-item__action c-item__minus" type="button">
                      <img src="./img/icons/minus.svg" alt="" width="24" height="24" />
                    </button>
                    <input type="text" className="c-item__inp" value="1" />
                    <button className="c-item__action c-item__plus" type="button">
                      <img src="./img/icons/plus.svg" alt="" width="24" height="24" />
                    </button>
                  </div>
                  <div className="c-item__price">
                    <span className="c-item__cost">1 299 ₽</span>
                  </div>
                </div>
              </div>
              <div className="c-item">
                <a href="#" className="c-item__img">
                  <span className="c-item__img_in">
                    <img src="./img/cart-item-img.png" alt="" width="83" height="110" />
                  </span>
                </a>
                <div className="c-item__main">
                  <div className="c-item__text">
                    <a href="#" className="c-item__name">
                      Лонгслив женский спортивный укороченный Womjoy Classic Logo Black
                    </a>
                    <span className="c-item__size">Размер: М</span>
                  </div>
                  <div className="c-item__actions">
                    <button className="c-item__action c-item__minus" type="button">
                      <img src="./img/icons/minus.svg" alt="" width="24" height="24" />
                    </button>
                    <input type="text" className="c-item__inp" value="1" />
                    <button className="c-item__action c-item__plus" type="button">
                      <img src="./img/icons/plus.svg" alt="" width="24" height="24" />
                    </button>
                  </div>
                  <div className="c-item__price">
                    <span className="c-item__cost">1 299 ₽</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout">
              <div className="section-top">
                <h2 className="checkout__title title-l">Оформление заказа</h2>
              </div>
              <div className="checkout__row">
                <div className="checkout__subtitle">Способ доставки</div>
                <div className="pvz-block">
                  <div className="pvz-block__text">
                    <div className="pvz-block__title">
                      Пункт выдачи СДЭК{' '}
                      <img src="./img/icons/sdek-check.svg" alt="" width="24" height="24" />
                    </div>
                    <div className="pvz-block__info">
                      <span className="pvz-block__cost">500 ₽</span>
                      <span>На Космонавтов 32</span>
                    </div>
                  </div>
                  <button className="pvz-block__btn" type="button">
                    Изменить
                  </button>
                </div>
                <div className="pvz-block">
                  <div className="pvz-block__text">
                    <div className="pvz-block__title">Пункт выдачи не выбран</div>
                    <div className="pvz-block__info">
                      <span>Доставка от 500 ₽</span>
                    </div>
                  </div>
                  <button className="btn-black" type="button">
                    Выбрать пункт выдачи
                  </button>
                </div>
              </div>
              <div className="checkout__row">
                <div className="checkout__subtitle">Способ оплаты</div>
                <label className="pay-method">
                  <input type="radio" name="pay_method" hidden checked />
                  <span className="pay-method__rd"></span>
                  <div className="pay-method__main">
                    <div className="pay-method__top">
                      <span className="pay-method__name">Картой онлайн</span>
                      <div className="pay-method__imgs">
                        <img src="./img/icons/mc.svg" alt="" width="45" height="32" />
                        <img src="./img/icons/mir.svg" alt="" width="45" height="32" />
                        <img src="./img/icons/visa.svg" alt="" width="45" height="32" />
                      </div>
                    </div>
                    <span className="gray">Без комиссии</span>
                  </div>
                </label>
                <label className="pay-method">
                  <input type="radio" name="pay_method" hidden />
                  <span className="pay-method__rd"></span>
                  <div className="pay-method__main">
                    <div className="pay-method__top">
                      <span className="pay-method__name">При получении</span>
                    </div>
                    <span className="gray">Оплата в пункте вывоза</span>
                  </div>
                </label>
              </div>
              <div className="checkout__row">
                <div className="checkout__subtitle">Данные получателя</div>
                <form className="field-list">
                  <div className="field">
                    <span className="field__ph">Ваше имя</span>
                    <input type="text" className="field__inp" placeholder="Иванов Иван Иванович" />
                  </div>
                  <div className="field">
                    <span className="field__ph">Номер телефона</span>
                    <input
                      type="text"
                      className="field__inp phone-masked-field"
                      placeholder="+7 956 654-55-33"
                    />
                  </div>
                  <div className="field">
                    <span className="field__ph">Email для счёта</span>
                    <input type="text" className="field__inp" placeholder="email@example.com" />
                  </div>
                  <div className="field field-text">
                    <span className="field__ph">Комментарий к заказу</span>
                    <textarea className="field__inp" placeholder="Текст комментария"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="c-main">
            <div className="c-main__title">Ваш заказ</div>
            <ul className="c-main__list">
              <li>
                <span>Товары, 3 шт.</span>
                <span>2000 р</span>
              </li>
              <li>
                <span>Скидка</span>
                <span>− 500 р</span>
              </li>
              <li>
                <span>Доставка</span>
                <span>Бесплатно</span>
              </li>
            </ul>
            <div className="c-main__final">
              Сумма заказа
              <span className="c-main__cost">2 000 р</span>
            </div>
            <button className="c-main__btn btn-primary" type="button">
              Оформить заказ
            </button>
            <label className="c-main__check f-check">
              <input type="checkbox" checked hidden />
              <span className="f-check__sq">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.08709 9.08709C2.72097 9.4532 2.72097 10.0468 3.08709 10.4129L6.08709 13.4129C6.4532 13.779 7.0468 13.779 7.41291 13.4129L14.9129 5.91291C15.279 5.5468 15.279 4.9532 14.9129 4.58709C14.5468 4.22097 13.9532 4.22097 13.5871 4.58709L6.75 11.4242L4.41291 9.08709C4.0468 8.72097 3.4532 8.72097 3.08709 9.08709Z"
                    fill="#1A1E24"
                  />
                </svg>
              </span>
              <span className="f-check__txt">
                Согласен с условиями <a href="#">Правил пользования торговой площадкой</a>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
