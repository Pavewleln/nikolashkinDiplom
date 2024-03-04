import React from 'react';
import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src="https://adm-malinishi.ru/wp-content/uploads/2022/01/Kr.png" alt="Логотип"/>
            <div className="header__info">
                <p>Администрация муниципального образования –
                    Малинищинское сельское поселение
                    Рязанской области
                </p>
            </div>
            <div className="header__contacts">
                <p><strong>Email:</strong> <a href="mailto:malinischi2013@yandex.ru">malinischi2013@yandex.ru</a></p>
                <p><strong>Телефон/факс:</strong>  <a href="tel:84915538125">8 (49155) 38-1-25</a></p>
                <p><strong>Адрес:</strong>  391143, Рязанская область,
                    Пронский район, с. Малинищи,
                    ул. Центральная, дом 175
                </p>
            </div>
        </header>
    );
};
