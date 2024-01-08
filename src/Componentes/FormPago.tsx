import { useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Cambia esto
import './FormUsuario.css';

function FormPago() {

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

    // Define el esquema de validación
    const schema = yup.object().shape({
        paymentMethod: yup.string().required('Se requiere un método de pago'),
    });

    // Comprueba si el estado actual del formulario es válido
    const isValid = schema.isValid({
        paymentMethod,
    });

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


    return (
        <div className='container contenedor-body-checkout'>
            <div className="row campo-form">

                <div className="col-12">
                    <h2 className="textoo">2. Pago</h2>
                </div>

                <div
                    className='col-12 recuadro-pago'
                    onClick={() => setPaymentMethod('webpay')}
                    style={paymentMethod === 'webpay' ? { borderRadius: '16px', border: '3px solid var(--Buttons-Active, #025B59)' } : {}}
                >
                    {paymentMethod === 'webpay' ? <RadioChecked /> : <RadioUnchecked />}
                    <label htmlFor="webpay" className='label-pago'>Webpay</label>
                </div>

                <div
                    className='col-12 recuadro-pago'
                    onClick={() => setPaymentMethod('creditCard')}
                    style={paymentMethod === 'creditCard' ? { borderRadius: '16px', border: '3px solid var(--Buttons-Active, #025B59)' } : {}}
                >
                    {paymentMethod === 'creditCard' ? <RadioChecked /> : <RadioUnchecked />}
                    <label htmlFor="creditCard" className='label-pago'>Tarjeta de Crédito</label>
                </div>

                <div
                    className='col-12 recuadro-pago'
                    onClick={() => setPaymentMethod('mercadoPago')}
                    style={paymentMethod === 'mercadoPago' ? { borderRadius: '16px', border: '3px solid var(--Buttons-Active, #025B59)' } : {}}
                >
                    {paymentMethod === 'mercadoPago' ? <RadioChecked /> : <RadioUnchecked />}
                    <label htmlFor="mercadoPago" className='label-pago'>Mercado Pago</label>
                </div>

                <div>
                    <button 
                    type="submit" 
                    className="boton-navegacion" 
                    style={{ width: '600px', marginTop: '24px' }} 
                    disabled={!isValid} 
                    onClick={() => navigate('/exito')}>
                        Pagar
                    </button>
                </div>


            </div>
        </div>
    );
}

export default FormPago;