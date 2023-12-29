import React, { useState } from 'react';
import './ProductDetail.css';

interface ProductDetailProps {
    title: string;
    price: number;
    productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ title, price }) => {
    const [quantity, setQuantity] = useState(0);
    const [plan, setPlan] = useState('');
    const [isSubscription, setIsSubscription] = useState(false);

    const RadioUnchecked = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z" fill="#252525" />
        </svg>
    );

    const RadioChecked = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9466 10.8415 8.3186 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6656 7.8695 15.0376 7.9555 14.7046 8.3945ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z" fill="#252525" />
        </svg>
    );

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const getSubscriptionPrice = (plan: string) => {
        switch (plan) {
            case '3':
                return 80000;
            case '6':
                return 150000;
            case '12':
                return 300000;
            default:
                return 0;
        }
    };

    const handleAddToCart = () => {
        // Implementar la lógica para agregar al carro de compras
        console.log(`Agregado al carro: ${quantity} ${title}(s)`);
    };

    return (
        <div className="container product-detail">
            <div className="row compra-unitaria">
                <div className="col-6 product-info">

                    <input type="radio"
                        id="unitPurchase"
                        name="purchaseType"
                        checked={!isSubscription}
                        onChange={() => {setIsSubscription(false); setQuantity(0);}} />
                    <label htmlFor="unitPurchase">
                        {!isSubscription ? <RadioChecked /> : <RadioUnchecked />}
                    </label>
                    <br />
                    <span className='detalles-titulo'>Compra unitaria</span>
                    <p className='detalles-precio'>${price}</p>

                </div>
                <div className="col-6 product-actions" >
                    <div className="btn-group botonera">  
                        <button className="btn btn-secondary" onClick={handleDecrease} disabled={isSubscription} > 
                            -
                        </button>
                        <span className="btn btn-secondary" >{quantity} </span>
                        <button className="btn btn-secondary" onClick={handleIncrease} disabled={isSubscription}>
                            +
                        </button>
                    </div>

                    <div className="detalles-total">
                        <div className='detalles-suma'>Total: </div>
                        <div className='detalles-suma'>${!isSubscription ? price * quantity : 0}</div>
                    </div>

                </div>
            </div>


            <div className="row compra-unitaria">
                <div className="col-6 product-info">

                    <input type="radio"
                        id="monthlySubscription"
                        name="purchaseType" checked={isSubscription}
                        onChange={() => {setIsSubscription(true); setPlan('');}}  />
                    <label htmlFor="monthlySubscription">
                        {isSubscription ? <RadioChecked /> : <RadioUnchecked />}
                    </label>
                    <br />
                    <span className='detalles-titulo'>Suscripción mensual</span>
                </div>
                <div className="col-6 product-actions">

                    <select className='seleccion-plan' value={plan} onChange={(e) => setPlan(e.target.value)} disabled={!isSubscription}>
                        <option value="">Selecciona un plan</option>
                        <option value="3">Plan 3 meses | Entrega mensual</option>
                        <option value="6">Plan 6 meses | Entrega mensual</option>
                        <option value="12">Plan 12 meses | Entrega mensual</option>
                    </select>


                    <div className="detalles-total">
                        <div className='detalles-suma'>Total: </div>
                        <div className='detalles-suma'>${isSubscription ? getSubscriptionPrice(plan) : 0}</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <button className='agregar-carro' onClick={handleAddToCart}>Agregar al carro</button>
            </div>
        </div>
    );
};

export default ProductDetail;