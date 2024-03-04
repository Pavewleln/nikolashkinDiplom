import React from 'react';
import Resh3 from '../assets/Решение-№-3-от-13.03.2020-г.docx';
import Resh32 from '../assets/Решение-№-32-от-21.12.2020-г.docx';
import Resh26 from '../assets/Решение-№-26-от-08.09.2021-г.docx';
import Resh18 from '../assets/Решение-№-18-09.08.2022-г.docx';
import Resh31 from '../assets/Решение-№-31-от-16.10.2023.docx';
import './Documents.css';
export const Documents = () => {
    return (
        <div className="documents">
            <h2>Устав</h2>
            <p>УСТАВ муниципального обраования — Малинищинское сельское поселение Пронского муниципального района Рязанской области</p>

            <h2>Изменения и дополнения</h2>
            <ul>
                <li><a href={Resh3} download>Решение № 3 от 13.03.2020 г.</a></li>
                <li><a href={Resh32} download>Решение № 32 от 21.12.2020 г.</a></li>
                <li><a href={Resh26} download>Решение № 26 от 08.09.2021 г.</a></li>
                <li><a href={Resh18} download>Решение № 18 от 09.08.2022 г.</a></li>
                <li><a href={Resh31} download>Решение № 31 от 16.10.2023 г.</a></li>
            </ul>
        </div>
    );
};
