import React from 'react';
import './Settlement.css';

export const Settlement = () => {
    return (
        <div className="settlement">
            <p className="heading">Малинищинское се́льское поселе́ние</p>
            <p>Муниципальное образование в Пронском районе Рязанской области Российской Федерации.</p>
            <p>Административный центр — село Малинищи.</p>
            <p>Статус и границы сельского поселения установлены Законом Рязанской области от 7 октября 2004 года № 89-ОЗ «О наделении муниципального образования Пронский район статусом муниципального района, об установлении его границ и границ муниципальных образований, входящих в его состав»</p>
            <p className="population">Численность населения - 1140 человек</p>
            <p className="heading">Состав сельского поселения</p>
            <div className="list">
                <div className="list-item"><span className="village">Бучалы</span> — деревня, население: 12</div>
                <div className="list-item"><span className="village">Гремяки</span> — село, население: 420</div>
                <div className="list-item"><span className="village">Добрая Слобода</span> — деревня, население: 2</div>
                <div className="list-item"><span className="village">Карповское</span> — село, население: 9</div>
                <div className="list-item"><span className="village">Малинищи</span> — село, административный центр, население: 691</div>
                <div className="list-item"><span className="village">Марфина Слобода</span> — деревня, население: 6</div>
            </div>
        </div>
    );
};
