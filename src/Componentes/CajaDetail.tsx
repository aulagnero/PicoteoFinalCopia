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
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.33333C9.08167 8.33333 8.33333 9.08167 8.33333 10V30C8.33333 30.9183 9.08167 31.6667 10 31.6667H30C30.9183 31.6667 31.6667 30.9183 31.6667 30V10C31.6667 9.08167 30.9183 8.33333 30 8.33333H10ZM30 35H10C7.24333 35 5 32.7567 5 30V10C5 7.24333 7.24333 5 10 5H30C32.7567 5 35 7.24333 35 10V30C35 32.7567 32.7567 35 30 35Z" fill="#252525" />
        </svg>
    );

    const RadioChecked = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5077 13.9908L18.201 22.2725L15.4793 18.7958C14.911 18.0692 13.8643 17.9425 13.1393 18.5108C12.4143 19.0775 12.286 20.1258 12.8543 20.8492L16.906 26.0275C17.2227 26.4308 17.706 26.6658 18.2193 26.6658H18.231C18.746 26.6642 19.2327 26.4208 19.5443 26.0092L27.1593 16.0092C27.7177 15.2758 27.576 14.2325 26.8427 13.6742C26.1093 13.1158 25.0627 13.2592 24.5077 13.9908ZM31.6667 30C31.6667 30.92 30.9183 31.6667 30 31.6667H10C9.08167 31.6667 8.33333 30.92 8.33333 30V10C8.33333 9.08 9.08167 8.33333 10 8.33333H30C30.9183 8.33333 31.6667 9.08 31.6667 10V30ZM30 5H10C7.24333 5 5 7.24333 5 10V30C5 32.7567 7.24333 35 10 35H30C32.7567 35 35 32.7567 35 30V10C35 7.24333 32.7567 5 30 5Z" fill="#252525" />
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