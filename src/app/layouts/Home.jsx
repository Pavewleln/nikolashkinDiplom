import React from 'react';
import "./Home.css"
const posts = [
    {
        id: 1,
        title: 'Главная',
        content: 'Уважаемые жители и гости администрации муниципального образования!\n' +
            'Приветствую Вас на официальном сайте администрации муниципального образования – Малинищинское сельское поселение Пронского муниципального района Рязанской области!\n' +
            '\n' +
            'Постоянное развитие технологий сделало процесс обмена информацией предельно доступным и комфортным практически для любого пользователя сети Интернет, что обусловило необходимость создания данного ресурса.\n' +
            '\n' +
            'На нашем сайте Вы всегда сможете найти ответы на волнующие Вас вопросы, узнать график работы администрации и приема граждан, ознакомиться с последними нормативно-правовыми актами.\n' +
            '\n' +
            'Надеюсь, полученная со страниц нашего сайта информация будет Вам полезна и интересна!',
    },
    {
        id: 2,
        imageUrl: 'https://adm-malinishi.ru/wp-content/uploads/2023/10/1.-%D0%93%D0%BE%D0%B2%D0%BE%D1%80%D1%8F%D1%82-%D0%BF%D1%80%D0%BE-%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8-%D0%9A%D0%BB%D0%B0%D0%B4%D0%B8-%D1%82%D1%80%D1%83%D0%B1%D0%BA%D1%83-%D0%B8-%D1%81%D0%B0%D0%BC-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D0%B9-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E-scaled.jpg', // Пустой URL, если у поста нет изображения
    },
    {
        id: 3,
        imageUrl: 'https://adm-malinishi.ru/wp-content/uploads/2023/10/2.-%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%BE%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0-%D0%BD%D0%B5-%D0%BE%D0%B1%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B2%D0%B0%D1%8E%D1%82-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-scaled.jpg',
    },
    {
        id: 4,
        imageUrl: 'https://adm-malinishi.ru/wp-content/uploads/2023/10/2.%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BC%D0%BE%D1%88%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8.png',
    },
    {
        id: 5,
        imageUrl: 'https://adm-malinishi.ru/wp-content/uploads/2023/10/3.-.-%D0%A2%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D1%88%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8.png',
    },
    {
        id: 6,
        imageUrl: "https://adm-malinishi.ru/wp-content/uploads/2023/10/4.-%D0%9A%D0%B0%D0%BA-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F-%D0%BE%D1%82-%D1%84%D0%B8%D1%88%D0%B8%D0%BD%D0%B3%D0%B0.png"
    },
    {
        id: 7,
        imageUrl: "https://adm-malinishi.ru/wp-content/uploads/2023/10/5.%D0%A7%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B5%D1%81%D0%BB%D0%B8-%D1%83%D0%BA%D1%80%D0%B0%D0%BB%D0%B8-%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8.png"
    },
    {
        id: 8,
        imageUrl: 'https://adm-malinishi.ru/wp-content/uploads/2023/10/6.%D0%9A%D0%B0%D0%BA-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F-%D0%BE%D1%82-%D0%B2%D0%B8%D1%80%D1%83%D1%81%D0%BE%D0%B2.png'
    }
];

export const Home = () => {
    return (
        <div className="posts">
            {posts.map(post => (
                // Проверяем, есть ли у поста изображение
                (
                    <div key={post.id} className="post">
                        {post.title && <h2>{post.title}</h2>}
                        {post.content && <p>{post.content}</p>}
                        {post.imageUrl && <img src={post.imageUrl} alt="Изображение поста" />}
                    </div>
                )
            ))}
        </div>
    );
};
