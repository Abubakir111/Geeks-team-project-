import Overlay from './Overlay/Overlay';
import styles from './ShopingCart.module.css';
import { useState, useEffect } from 'react';
import Menu from './Menu.json';
import plus from '../../asserts/ShoppingCart-img/plus.svg';
import cross from '../../asserts/ShoppingCart-img/cross-small.svg';
import Button from '../UI/Button.jsx';
import logo from '../../asserts/LOGO.png';

const ShoppingCart = ({ close }) => {
    const [data, setData] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [activeGroup, setActiveGroup] = useState('');
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [price, setPrice] = useState();
    const [allCategoryProduct, setAllCategoryProduct] = useState();

    useEffect(() => {
        setData([...Menu]);
    }, []);

    useEffect(() => {
        setFilterCategory(data);
    }, [data]);

    const uniqueCategories = [...new Set(data.map(item => item.category))];

    const filterGroup = (item) => {
        let filtCategory = data.filter(product => product.category === item);
        setFilterCategory(filtCategory);
    };

    const handleClick = (item) => {
        filterGroup(item);
        setActiveGroup(item);
        totalPrice();
        setAllCategoryProduct('.');
    };

    const handleSearch = () => {
        const searchArray = data.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setFilterCategory(searchArray);
    };


    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const addProduct = (item) => {
        setSelectedProduct(prev => {
            const updatedSelectedProduct = [...prev, item];
            return updatedSelectedProduct;
        });
    };

    useEffect(() => {
        totalPrice();
    }, [selectedProduct]);

    const totalPrice = () => {
        const sum = selectedProduct.reduce((total, item) => total + item.price, 0);
        setPrice(sum);
    };

    const deleteProduct = (id) => {
        const deletedArray = selectedProduct.filter((elem, index) => id !== index);
        setSelectedProduct(deletedArray);
    };

    useEffect(() => {
        handleSearch();
    }, [searchValue]);


    return (
        <div>
            <div className={styles.cart}>
                <img onClick={close} className={styles.cart__exit} src={cross} alt='cross' />
                <img src={logo} alt='logo' />
                <h2 className={styles.cart__title}>Доставка Продуктов</h2>
                <input
                    className={styles.cart__input}
                    placeholder='Найти еду!'
                    type='text'
                    onChange={handleChange}
                    value={searchValue}
                />
                <div className={styles.cart__category}>
                    {uniqueCategories.map(item => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={`${styles.cart__categoryWrap} ${activeGroup === item ? styles.activeGroup : ''}`}>
                            <p className={styles.cart__categoryItem}>{item}</p>
                        </button>
                    ))}
                    <button
                        className={`${styles.cart__categoryWrap} ${allCategoryProduct === 'Все продукты' ? styles.activeGroup : ''}`}
                        onClick={(event) => {
                            setAllCategoryProduct(event.target.innerText);
                            setFilterCategory(data);
                            setActiveGroup('0');
                        }}>Все продукты
                    </button>
                </div>
                <div className={styles.cart__list}>
                    <ul className={styles.cart__ul}>
                        {filterCategory.length === 0 ?
                            <h3 style={{ marginBottom: '20px' }}>Ничего не найдено!</h3> : filterCategory.map(item => (
                                <li key={item.name} className={styles.cart__li}>
                                    <span>{item.name}</span> <span className={styles.rightBLock}>{item.price} сом <span><img
                                    onClick={() => {
                                        addProduct(item);
                                    }} className={styles.plus} src={plus} alt='plus' /></span></span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className={styles.cart__selected}>
                    <h2 style={{ marginBottom: '15px' }}>Ваш Заказ</h2>
                    <ol className={styles.selected__ul}>
                        {selectedProduct.map((item, index) => (
                            <li key={index}>
                                <div className={styles.selectedWrap}>
                                    <span>{item.name}</span>
                                    <span>{item.price} сом <img onClick={() => {
                                        deleteProduct(index);
                                    }} className={styles.cross} src={cross} alt='cross' /></span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className={styles.totalPrice}>
                    <div className={styles.totalPriceWrap}>
                        <div className={styles.btnWrap}>
                            <Button textButton={'Заказать Доставку'} w={157} h={47} bg={'#FF7400'} />
                        </div>
                        <div className={styles.totalPriceWrapper}>
                            <span style={{ fontWeight: '600' }}
                                  className={styles.totalPriceItem}>Итого: {price} сом</span>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay exit={close} />
        </div>
    );
};

export default ShoppingCart;
