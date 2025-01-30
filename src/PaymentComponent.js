import React, { useState, useEffect } from 'react';

const PaymentComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.cinetpay.com/seamless/main.js';
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handlePayment = () => {
        if (isLoaded) {
            // Configurer CinetPay
            CinetPay.setConfig({
                apikey: '870215380678f13b6ddd886.57617223',
                site_id: '105886080',
                notify_url: 'http://localhost:3001/notify',
                mode: 'PRODUCTION',
            });

            // Initialiser un paiement
            CinetPay.getCheckout({
                transaction_id: Math.floor(Math.random() * 100000000).toString(),
                amount: 100, // Montant
                currency: 'XOF', // Devise
                channels: 'ALL', // Moyens de paiement
                description: 'Paiement pour un produit',
            });

            // Gérer les réponses de paiement
            CinetPay.waitResponse((data) => {
                if (data.status === "ACCEPTED") {
                    console.log('Paiement réussi:', data);
                    // Traitez le paiement réussi 
                } else if (data.status === "REFUSED") {
                    console.error('Erreur de paiement:', data);
                    // Traitez l'erreur de paiement 
                }
            });
        } else {
            console.log('Le script n\'est pas encore chargé.');
        }
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={!isLoaded}>Payer</button>
        </div>
    );
};

export default PaymentComponent;
