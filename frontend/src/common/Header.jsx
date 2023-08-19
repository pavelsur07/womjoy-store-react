import * as React from 'react'

export function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header__main">
            <div className="header__left">
              <a href="#" className="header__logo">
                <img src="./img/logo.svg" alt="" width="205" height="36" />
              </a>
            </div>
            <div className="burger">
              <span className="burger__item"></span>
              <span className="burger__item"></span>
              <span className="burger__item"></span>
            </div>
          </div>
          <form className="search">
            <input type="text" className="search__inp" placeholder="Я хочу найти" />
            <button className="search__submit" type="submit">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4697 16.9697C16.7626 16.6768 17.2374 16.6768 17.5303 16.9697L21.5303 20.9697C21.8232 21.2626 21.8232 21.7374 21.5303 22.0303C21.2374 22.3232 20.7626 22.3232 20.4697 22.0303L16.4697 18.0303C16.1768 17.7374 16.1768 17.2626 16.4697 16.9697Z"
                  fill="#2F2B43"
                  fillOpacity="0.4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 4.25C6.99594 4.25 3.75 7.49594 3.75 11.5C3.75 15.5041 6.99594 18.75 11 18.75C13.0057 18.75 14.82 17.9365 16.1333 16.6197C17.4421 15.3074 18.25 13.4988 18.25 11.5C18.25 7.49594 15.0041 4.25 11 4.25ZM2.25 11.5C2.25 6.66751 6.16751 2.75 11 2.75C15.8325 2.75 19.75 6.66751 19.75 11.5C19.75 13.9118 18.7732 16.097 17.1954 17.679C15.6121 19.2664 13.4202 20.25 11 20.25C6.16751 20.25 2.25 16.3325 2.25 11.5Z"
                  fill="#2F2B43"
                  fillOpacity="0.4"
                />
              </svg>
            </button>
          </form>
          <ul className="header__actions">
            <li className="drop">
              <a href="#">
                <img src="./img/icons/cabinet.svg" alt="" width="24" height="24" />
                Кабинет
              </a>
              <ul className="drop__list">
                <li className="drop__item">
                  <a href="#" className="drop__link">
                    Мои данные
                  </a>
                </li>
                <li className="drop__item">
                  <a href="#" className="drop__link">
                    История заказов
                  </a>
                </li>
                <li className="drop__item">
                  <a href="#" className="drop__link">
                    Обратная связь
                  </a>
                </li>
                <li className="drop__item">
                  <a href="#" className="drop__link gray">
                    Выйти
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src="./img/icons/favourite.svg" alt="" width="24" height="24" />
                Избранное
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/icons/cart.svg" alt="" width="24" height="24" />
                <span className="cart-currentcnt">5</span>
                Корзина
              </a>
            </li>
          </ul>
        </div>

        <div className="header__bottom">
          <div className="wrapper">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item menu-droper">
                  <a href="#" className="nav__link">
                    Женщинам
                  </a>
                  <div className="menu">
                    <div className="wrapper">
                      <div className="menu__content">
                        <div className="menu__cols">
                          <div className="menu__col">
                            <div className="menu__title">Щенщинам</div>
                            <ul className="menu__list">
                              <li>
                                <a href="#">Брюки</a>
                              </li>
                              <li>
                                <a href="#">Леггинсы</a>
                              </li>
                              <li>
                                <a href="#">Топы</a>
                              </li>
                              <li>
                                <a href="#">Рашгарды</a>
                              </li>
                              <li>
                                <a href="#">Футболки</a>
                              </li>
                              <li>
                                <a href="#">Худи</a>
                              </li>
                              <li>
                                <a href="#">Шорты</a>
                              </li>
                              <li>
                                <a href="#">Аксессуары</a>
                              </li>
                            </ul>
                          </div>
                          <div className="menu__col">
                            <div className="menu__title">Занятия</div>
                            <ul className="menu__list">
                              <li>
                                <a href="#">Йога</a>
                              </li>
                              <li>
                                <a href="#">Фитнес</a>
                              </li>
                              <li>
                                <a href="#">Бег</a>
                              </li>
                              <li>
                                <a href="#">Активный отдых</a>
                              </li>
                              <li>
                                <a href="#">Полиденс</a>
                              </li>
                            </ul>
                          </div>
                          <div className="menu__col">
                            <div className="menu__title">Спецпредложения</div>
                            <ul className="menu__list">
                              <li>
                                <a href="#">Весна 2023</a>
                              </li>
                              <li>
                                <a href="#">Новинки</a>
                              </li>
                              <li>
                                <a href="#">Распродажа</a>
                              </li>
                              <li>
                                <a href="#">Скоро в продаже</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a href="#" className="menu__banner">
                          <img
                            src="./img/banners/menu-banner.webp"
                            alt=""
                            width="392"
                            height="290"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Брюки
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Леггинсы
                  </a>
                </li>
                <li className="nav__item drop">
                  <a href="#" className="nav__link">
                    Покупателям
                  </a>
                  <ul className="drop__list">
                    <li className="drop__item">
                      <a href="#" className="drop__link">
                        Доставка и оплата
                      </a>
                    </li>
                    <li className="drop__item">
                      <a href="#" className="drop__link">
                        Обмен и возврат
                      </a>
                    </li>
                    <li className="drop__item">
                      <a href="#" className="drop__link">
                        О компании
                      </a>
                    </li>
                    <li className="drop__item">
                      <a href="#" className="drop__link">
                        Личный кабинет
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="burger-menu">
        <div className="wrapper">
          <form className="search">
            <input type="text" className="search__inp" placeholder="Я хочу найти" />
            <button className="search__submit" type="submit">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4697 16.9697C16.7626 16.6768 17.2374 16.6768 17.5303 16.9697L21.5303 20.9697C21.8232 21.2626 21.8232 21.7374 21.5303 22.0303C21.2374 22.3232 20.7626 22.3232 20.4697 22.0303L16.4697 18.0303C16.1768 17.7374 16.1768 17.2626 16.4697 16.9697Z"
                  fill="#2F2B43"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 4.25C6.99594 4.25 3.75 7.49594 3.75 11.5C3.75 15.5041 6.99594 18.75 11 18.75C13.0057 18.75 14.82 17.9365 16.1333 16.6197C17.4421 15.3074 18.25 13.4988 18.25 11.5C18.25 7.49594 15.0041 4.25 11 4.25ZM2.25 11.5C2.25 6.66751 6.16751 2.75 11 2.75C15.8325 2.75 19.75 6.66751 19.75 11.5C19.75 13.9118 18.7732 16.097 17.1954 17.679C15.6121 19.2664 13.4202 20.25 11 20.25C6.16751 20.25 2.25 16.3325 2.25 11.5Z"
                  fill="#2F2B43"
                />
              </svg>
            </button>
          </form>
          <ul className="burger-menu__list">
            <li className="burger-menu__item dropable">
              <div className="burger-menu__title">Щенщинам</div>
              <ul className="burger-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
                <li>
                  <a href="#">Рашгарды</a>
                </li>
                <li>
                  <a href="#">Футболки</a>
                </li>
                <li>
                  <a href="#">Худи</a>
                </li>
                <li>
                  <a href="#">Шорты</a>
                </li>
                <li>
                  <a href="#">Аксессуары</a>
                </li>
              </ul>
            </li>
            <li className="burger-menu__item dropable">
              <div className="burger-menu__title">Занятия</div>
              <ul className="burger-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
            <li className="burger-menu__item dropable">
              <div className="burger-menu__title">Спецпредложения</div>
              <ul className="burger-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
            <li className="burger-menu__item dropable">
              <div className="burger-menu__title">Покупателям</div>
              <ul className="burger-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
            <li className="burger-menu__item">
              <a href="#" className="burger-menu__title">
                Покупателям
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="catalog-menu">
        <div className="wrapper">
          <form className="search">
            <input type="text" className="search__inp" placeholder="Я хочу найти" />
            <button className="search__submit" type="submit">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4697 16.9697C16.7626 16.6768 17.2374 16.6768 17.5303 16.9697L21.5303 20.9697C21.8232 21.2626 21.8232 21.7374 21.5303 22.0303C21.2374 22.3232 20.7626 22.3232 20.4697 22.0303L16.4697 18.0303C16.1768 17.7374 16.1768 17.2626 16.4697 16.9697Z"
                  fill="#2F2B43"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 4.25C6.99594 4.25 3.75 7.49594 3.75 11.5C3.75 15.5041 6.99594 18.75 11 18.75C13.0057 18.75 14.82 17.9365 16.1333 16.6197C17.4421 15.3074 18.25 13.4988 18.25 11.5C18.25 7.49594 15.0041 4.25 11 4.25ZM2.25 11.5C2.25 6.66751 6.16751 2.75 11 2.75C15.8325 2.75 19.75 6.66751 19.75 11.5C19.75 13.9118 18.7732 16.097 17.1954 17.679C15.6121 19.2664 13.4202 20.25 11 20.25C6.16751 20.25 2.25 16.3325 2.25 11.5Z"
                  fill="#2F2B43"
                />
              </svg>
            </button>
          </form>
          <div className="cat__items">
            <a href="#" className="cat__item cat__item-lg">
              <div className="cat__text">
                <span className="cat__name">Брюки</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-1.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-lg">
              <div className="cat__text">
                <span className="cat__name">Леггинсы</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-2.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-md">
              <div className="cat__text">
                <span className="cat__name">Топы</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-3.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-md">
              <div className="cat__text">
                <span className="cat__name">Рашгарды</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-4.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-md">
              <div className="cat__text">
                <span className="cat__name">Футболки</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-5.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-lg">
              <div className="cat__text">
                <span className="cat__name">Худи</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-6.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <a href="#" className="cat__item cat__item-lg">
              <div className="cat__text">
                <span className="cat__name">Шорты</span>
                <div className="cat__bottom">
                  <span className="cat__cnt">15 моделей</span>
                  <span className="cat__price">от 1 799 ₽</span>
                </div>
              </div>
              <img
                src="./img/cats/img-7.webp"
                alt=""
                className="cat__img"
                width="250"
                height="250"
              />
            </a>
            <div className="cat__item cat__sale">
              <span className="cat__sale_alert">%</span>
              <span className="cat__sale_name">Распродажа</span>
            </div>
          </div>

          <ul className="catalog-menu__list">
            <li className="catalog-menu__item">
              <div className="catalog-menu__title">Щенщинам</div>
              <ul className="catalog-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
                <li>
                  <a href="#">Рашгарды</a>
                </li>
                <li>
                  <a href="#">Футболки</a>
                </li>
                <li>
                  <a href="#">Худи</a>
                </li>
                <li>
                  <a href="#">Шорты</a>
                </li>
                <li>
                  <a href="#">Аксессуары</a>
                </li>
              </ul>
            </li>
            <li className="catalog-menu__item">
              <div className="catalog-menu__title">Занятия</div>
              <ul className="catalog-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
            <li className="catalog-menu__item">
              <div className="catalog-menu__title">Спецпредложения</div>
              <ul className="catalog-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
            <li className="catalog-menu__item">
              <div className="catalog-menu__title">Покупателям</div>
              <ul className="catalog-menu__sublist">
                <li>
                  <a href="#">Брюки</a>
                </li>
                <li>
                  <a href="#">Леггинсы</a>
                </li>
                <li>
                  <a href="#">Топы</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
