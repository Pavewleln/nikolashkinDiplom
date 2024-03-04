import React from 'react';
import './Administration.css';

export const Administration = () => {
    return (
        <div className="administration">
            <p className="heading">Администрация Муниципального образования - Малинищинское сельское поселение Пронского муниципального района Рязанской области</p>
            <p><span className="label">Руководитель:</span><span className="value">Глава администрации Клинкова Елена Николаевна</span></p>
            <p><span className="label">ИНН / КПП:</span><span className="value">6211005898 / 621101001</span></p>
            <p><span className="label">Количество учредителей:</span><span className="value">1</span></p>
            <p><span className="label">Дата регистрации:</span><span className="value">28.12.2005</span></p>
            <p><span className="label">Статус:</span><span className="value">Действующее</span></p>
        </div>
    );
};
