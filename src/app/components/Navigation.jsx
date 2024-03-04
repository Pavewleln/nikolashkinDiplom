import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"
export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/settlement">Поселение</Link></li>
                <li><Link to="/administration">Администрация</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/council">Совет депутатов</Link></li>
                <li><Link to="/documents">Документы</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    );
};
