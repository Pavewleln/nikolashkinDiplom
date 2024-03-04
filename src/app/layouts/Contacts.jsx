import React from 'react';
import './Contacts.css';

export const Contacts = () => {
    return (
        <div className="contacts">
            <h2>Контакты</h2>
            <p>Администрация муниципального образования –
                Малинищинское сельское поселение Пронского муниципального района Рязанской области</p>

            <p>Email: malinischi2013@yandex.ru</p>
            <p>Телефон/факс: 8 (49155) 38-1-25</p>
            <div className="address">
                <p>Адрес: 391143, Рязанская область, Пронский район, с. Малинищи, ул. Центральная, дом 175</p>
            </div>
        </div>
    );
};
