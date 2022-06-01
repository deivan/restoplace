const DB = [
    {
        name: 'Київ', id: 1, data: [
            {
                id: 1001, name: 'За двома зайцями', address: 'вулиця Андріївський узвіз, 34, Київ, 04070', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 10001, img: '', name: 'Шашлык', description: '', price: 50.00 , imageUrl: "https://bystryerecepty.ru/wp-content/uploads/2018/08/blobid1533630306228.jpg" } ,
                    { id: 10002, img: '', name: 'Пиво', description: '', price: 30.00  , imageUrl: "https://alcofan.com/wp-content/uploads/2014/07/klassicheskoe-pivo-svarennoe-doma.jpg"},
                    { id: 10003, img: '', name: 'Картошка Фри', description: '', price: 42.00  , imageUrl: "https://cdn.nur.kz/images/1120x630/c32d3fb966359aa4.jpeg"},
                    { id: 10004, img: '', name: 'Гречка', description: '', price: 56.00  , imageUrl: "https://rutxt.ru/files/13209/original/ede39c3cb2.JPG"},
                    { id: 10005, img: '', name: 'Салат греческий', description: '', price: 50.00  , imageUrl: "https://www.maggi.ru/data/images/recept/img640x500/recept_234_08vf.jpg"}
                ]
            },
            {
                id: 1002, name: 'Корчма Тарас Бульба', address: 'вулиця Пушкінська, 2-4/7, Київ, 02000', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 11001, img: '', name: 'Шашлык', description: '', price: 40.00  , imageUrl: "https://bystryerecepty.ru/wp-content/uploads/2018/08/blobid1533630306228.jpg"},
                    { id: 11002, img: '', name: 'Салат “Королевский”', description: 'За 200 гр.', price: 105.00  , imageUrl: "https://www.povarenok.ru/data/cache/2017feb/07/42/1903244_57293-710x550x.jpg"},
                    { id: 11003, img: '', name: 'Деруны с мясом запеченные в горшочке', description: 'За 300 гр.', price: 80.00  , imageUrl: "https://www.povarenok.ru/data/cache/2016nov/19/59/1817456_89926-640x480.jpg"},
                    { id: 11004, img: '', name: 'Сочный стейк в яблочно-медовом соусе', description: 'За 200 гр.', price: 135.00  , imageUrl: "https://st.kashalot.com/img/club/2020/05/16/5007_900-ff64cae6-club.jpg"}
                ]
            },
            {
                id: 1003, name: 'Практика', address: 'вулиця Бульварно-Кудрявская 3, Київ, 01024', workTimes: ['11.00-23.00', '11.00-23.00', '11.00-23.00', '11.00-23.00', '11.00-23.00', '11.00-23.00', '11.00-23.00'],
                menu: [
                    { id: 12001, img: '', name: 'Салат "Цезарь"', description: '', price: 200.00  , imageUrl: "https://images.unian.net/photos/2019_12/thumb_files/1000_545_1577182092-7643.jpg"},
                    { id: 12002, img: '', name: 'Свиные Рёбрышки BBQ', description: '', price: 390.00  , imageUrl: "https://s1.eda.ru/StaticContent/Photos/120131083826/140926122923/p_O.jpg"},
                    { id: 12003, img: '', name: 'Компот бабушки со смородиной и малиной', description: '', price: 50.00  , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HWiIreAFRm_zLM5NNs1_4-FyuN2yWIIEDQ&usqp=CAU"},
                    { id: 12004, img: '', name: 'Медовик', description: '', price: 140.00  , imageUrl: "https://images.unian.net/photos/2020_04/thumb_files/400_0_1588166710-5560.jpg?0.6916055921483584"},
                ]
            },
        ]
    },
    {
        name: 'Дніпро', id: 2, data: [
            {
                id: 2001, name: 'Репортер', address: 'вулиця Барикадна, 2, Дніпро', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 21001, img: '', name: 'Салат греческий', description: '', price: 150.00  , imageUrl: "https://www.maggi.ru/data/images/recept/img640x500/recept_234_08vf.jpg"},
                    { id: 21002, img: '', name: 'Пеппер Стейк', description: '', price: 500.00  , imageUrl: "https://kulinario.me/images/1668.jpg"},
                    { id: 21003, img: '', name: 'Роллы "Калифорния" с крабом', description: '', price: 420.00  , imageUrl: "https://sushi-trend.ru/img/p/3/8/5/385-large_restaurant_default.jpg"},
                    { id: 21004, img: '', name: 'Тархун-маракуйя (Лимонад)', description: '', price: 75.00  , imageUrl: "https://stroganov-grill.ru/upload/iblock/ad7/ad79a3347eadaa5c8b39a5650bf3789c.jpg"},
                ]
            },
            {
                id: 2002, name: 'One Dollar Bar', address: 'вулиця Шевченка, 6, Дніпро', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 22001, img: '', name: 'Брускетта с курицей', description: '', price: 200.00  , imageUrl: "https://the-challenger.ru/wp-content/uploads/2017/11/04-4-800x533.jpg"},
                    { id: 22002, img: '', name: 'Куриный Стейк', description: '', price: 250.00  , imageUrl: "https://s1.eda.ru/StaticContent/Photos/120131112204/180314175245/p_O.jpg"},
                    { id: 22003, img: '', name: 'Торт Сникерс', description: '', price: 800.00  , imageUrl: "https://img-global.cpcdn.com/recipes/47ea9756521c381f/1200x630cq70/photo.jpg"},
                    { id: 22004, img: '', name: 'Мята-Лайм', description: '', price: 90.00  , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwI2Iuxobw8CVdwIZM21JPTkuAv4a8ddBOQKjRREWcHaXnLipcqRRFOcjS_V6d64Ls4o&usqp=CAU"},
                ]
            }
        ]
    },
    {
        name: 'Львів', id: 3, data: [
            {
                id: 3001, name: 'Тераса', address: 'вулиця Звенигородська, 3', workTimes: ['09.00-22.00', '09.00-22.00', '09.00-22.00', '09.00-22.00', '09.00-22.00', '09.00-22.00', '09.00-22.00'],
                menu: [
                    { id: 31001, img: '', name: 'Хумус зі шпинатом', description: '', price: 180.00  , imageUrl: "https://s1.eda.ru/StaticContent/Photos/120131090114/161214111544/p_O.jpg"},
                    { id: 31002, img: '', name: 'Тар-тар з телятиною', description: '', price: 280.00  , imageUrl: "https://www.iamcooking.ru/wp-content/uploads/2018/04/beef-tartare.jpg"},
                    { id: 31003, img: '', name: 'Овочеший салат', description: '', price: 100.00  , imageUrl: "https://images.unian.net/photos/2020_12/thumb_files/1200_0_1608721820-6449.jpg"},
                    { id: 31004, img: '', name: 'Овочі-гриль', description: '', price: 105.00  , imageUrl: "https://blog.metro.ua/wp-content/uploads/2019/05/1-min-18.jpg"},
                    { id: 31005, img: '', name: 'Штрудель яблучний', description: '', price: 140.00  , imageUrl: "https://img.cookorama.net/uploads/images/02/46/22/2021/01/30/b1ef9a_780x.jpg"},
                ]
            },
            {
                id: 3002, name: 'Гасова Лямпа', address: 'вулиця Вірменська, 20', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 32001, img: '', name: 'Карпачо з восьминіга', description: 'Це блюдо вісить 100 гр.', price: 245.00, imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/71/c2/db/caption.jpg" },
                    { id: 32002, img: '', name: 'Тар-тар з лосося', description: '', price: 200.00, imageUrl: "https://static.1000.menu/img/content-v2/82/7b/38121/tartar-iz-lososya_1631115782_0_max.jpg"  },
                    { id: 32003, img: '', name: 'Камамбер', description: '', price: 185.00, imageUrl: "https://www.gastronom.ru/binfiles/images/20151118/b007cc2d.jpg"  },
                    { id: 32004, img: '', name: 'Рібай Стейк', description: 'За 100 гр.', price: 250.00, imageUrl: "https://s1.eda.ru/StaticContent/Photos/120213181923/120626165816/p_O.jpg"  },
                    { id: 32005, img: '', name: 'Салат грецький', description: '', price: 160.00, imageUrl: "https://jisty.com.ua/wp-content/uploads/2019/11/salat-gretskij.jpg"  },
                ]
            },
            {
                id: 3003, name: 'Mons Pius', address: 'вулиця Вірменська, 7', workTimes: ['10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00', '10.00-22.00'],
                menu: [
                    { id: 33001, img: '', name: 'Дабл Трафл Бургер', description: '', price: 389.00  , imageUrl: "https://dostavka.restaron.ua/monspius/resources/products/2/2.0.medium.jpg?1608822656"},
                    { id: 33002, img: '', name: 'Дак Бургер', description: 'Бургер з качки', price: 341.00  , imageUrl: "https://dostavka.restaron.ua/monspius/resources/products/2/2.0.medium.jpg?1608822656"},
                    { id: 33003, img: '', name: 'Цезар з куркою', description: '', price: 150.00  , imageUrl: "https://www.recept.ua/files/uploads/rec_img/salat-cezar-klassiceskiy-s-kuricey-i-suharikami.jpg"},
                    { id: 33004, img: '', name: 'Т-Боун Стейк', description: 'За 100 гр.', price: 120.00  , imageUrl: "https://prorock.kiev.ua/wp-content/uploads/2018/07/t-bone-1080x675.jpg"},
                    { id: 33005, img: '', name: 'Салат грецький', description: '', price: 140.00   , imageUrl: "https://harchi.info/files/styles/recipe_main_image/public/recipes/7423-pravylnyy-greckyy-salat-sm.jpg?itok=2vy6Ud9h"},
                ]
            }        ]
    }
];
