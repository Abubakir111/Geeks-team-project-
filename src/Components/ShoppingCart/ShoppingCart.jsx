import Overlay from './Overlay/Overlay';
import styles from './ShopingCart.module.css';
import {useEffect, useState} from 'react';
import Menu from './Menu.json';
import plus from '../../asserts/ShoppingCart-img/plus.svg';
import cross from '../../asserts/ShoppingCart-img/cross-small.svg';
import Button from '../UI/Button.jsx';
import logo from '../../asserts/LOGO.png';
import TableModal from "../TableModal/TableModal.jsx";

const ShoppingCart = ({close}) => {
    const [data, setData] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [activeGroup, setActiveGroup] = useState('');
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [price, setPrice] = useState();
    const [allCategoryProduct, setAllCategoryProduct] = useState();
    const [confirm, setConfirm] = useState(false);

    const [getId, setGetId] = useState();

    const getConfirm = () => {
        selectedProduct.length !== 0 ? setConfirm(true) : null;
    };

    useEffect(() => {
        setData([...Menu]);
    }, []);

    useEffect(() => {
        setFilterCategory(data);
    }, [data]);

    const uniqueCategories = [...new Set(data.map(item => item.category))];

    const filterGroup = (item) => {
        let filterCategory = data.filter(product => product.category === item);
        setFilterCategory(filterCategory);
    };

    const handleClick = (item) => {
        filterGroup(item);
        setActiveGroup(item);
        totalPrice();
        setAllCategoryProduct('.');
    };

    const handleSearch = () => {
        const searchArray = data.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterCategory(searchArray);
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const addProduct = (item) => {
        setSelectedProduct(prev => {
            return [...prev, item];
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

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const getIndexImg = (index) => {
        setGetId(index);
    };

    return (
        <div>
            {confirm ? (
                <TableModal close={close} name={'Сделать Заказ!'} onClick={close}/>
            ) : (
                <div>
                    <div className={styles.cart}>
                        <img
                            onClick={close}
                            className={styles.cart__exit}
                            src={cross}
                            alt="cross"
                        />
                        <img src={logo} alt="logo"/>
                        <h2 className={styles.cart__title}>Доставка</h2>
                        <input
                            className={styles.cart__input}
                            placeholder="Найти еду!"
                            type="text"
                            onChange={handleChange}
                            value={searchValue}
                        />
                        <div className={styles.cart__category}>
                            {uniqueCategories.map(item => (
                                <button
                                    key={item}
                                    onClick={() => handleClick(item)}
                                    className={`${styles.cart__categoryWrap} ${activeGroup === item ? styles.activeGroup : ''
                                    }`}
                                >
                                    <p className={styles.cart__categoryItem}>{item}</p>
                                </button>
                            ))}
                            <button
                                className={`${styles.cart__categoryWrap} ${allCategoryProduct === 'Все продукты'
                                    ? styles.activeGroup
                                    : ''
                                }`}
                                onClick={(event) => {
                                    setAllCategoryProduct(event.target.innerText);
                                    setFilterCategory(data);
                                    setActiveGroup('0');
                                }}
                            >
                                Все продукты
                            </button>
                        </div>
                        <div className={styles.cart__list}>
                            <ul className={styles.cart__ul}>
                                {filterCategory.length === 0 ? (
                                    <p style={{marginBottom: '20px'}}>Ничего не найдено! &#128561;</p>
                                ) : (
                                    filterCategory.map((item, index) => (
                                        <li key={item.name} className={styles.cart__li}>
                                            <span
                                                onMouseEnter={() => {
                                                    handleMouseEnter();
                                                    getIndexImg(index);
                                                }}
                                                onMouseLeave={handleMouseLeave}
                                                className={styles.name}
                                            >
                                                {item.name}
                                            </span>{' '}
                                            <span className={styles.rightBLock}>
                                                {item.price} сом{' '}
                                                <span>
                                                    <img
                                                        onClick={() => {
                                                            addProduct(item);
                                                        }}
                                                        className={styles.plus}
                                                        src={plus}
                                                        alt="plus"
                                                    />
                                                </span>
                                            </span>
                                        </li>
                                    ))
                                )}
                                {showTooltip && (
                                    <img
                                        className={styles.modalPic}
                                        src={filterCategory[getId]?.img}
                                        alt="img"
                                    />
                                )}
                            </ul>
                        </div>
                        <div className={styles.cart__selected}>
                            <h2 style={{marginBottom: '15px'}}>Ваш Заказ</h2>
                            <ol className={styles.selected__ul}>
                                {selectedProduct.length === 0 ? (
                                    <li>Тут ничего нет &#128532;</li>
                                ) : (
                                    selectedProduct.map((item, index) => (
                                        <li key={index}>
                                            <div className={styles.selectedWrap}>
                                                <span>{item.name}</span>
                                                <span>
                                                    {item.price} сом{' '}
                                                    <img
                                                        onClick={() => deleteProduct(index)}
                                                        className={styles.cross}
                                                        src={cross}
                                                        alt="cross"
                                                    />
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ol>
                        </div>
                        <div className={styles.totalPrice}>
                            <div className={styles.totalPriceWrap}>
                                <div className={styles.btnWrap}>
                                    <Button
                                        onClick={getConfirm}
                                        textButton={
                                            selectedProduct.length === 0
                                                ? 'Закажи что-нибудь'
                                                : 'Заказать Доставку'
                                        }
                                        w={157}
                                        h={47}
                                        bg={'#FF7400'}
                                    />
                                </div>
                                <div className={styles.totalPriceWrapper}>
                                    <span style={{fontWeight: '600'}} className={styles.totalPriceItem}>
                                        Итого: {price} сом
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Overlay exit={close}/>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
