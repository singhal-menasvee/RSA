import React, { useState } from 'react';
import encryptAndDecrypt from './nodeScript';
import './index.css';

const EncryptionDisplay = () => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState(null);

    const handleFirstEncryption = () => {
        const result = encryptAndDecrypt();
        setData(result);
        setStep(1);
    };

    const handleSecondEncryption = () => {
        setStep(2);
    };

    return (
        <div className="encryption-page">
            <div className="content">
                <h1 className="title">🔐 RSA Encryption Machine</h1>
                <p className="message">❗Pakistan is planning an attack❗</p>
                {step === 0 && (
                    <button className="btn" onClick={handleFirstEncryption}>
                        Encrypt with Private Key & Decrypt with Public Key
                    </button>
                )}
                {step === 1 && (
                    <div className="result-container">
                        <p className="result-label"><strong>Encrypted with Private Key:</strong></p>
                        <p className="result-text">{data.encryptedPrivate}</p>
                        <p className="result-label"><strong>Decrypted with Public Key:</strong></p>
                        <p className="result-text">{data.decryptedPublic}</p>
                        <button className="btn" onClick={handleSecondEncryption}>
                            Encrypt with Public Key & Decrypt with Private Key
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <div className="result-container">
                        <p className="result-label"><strong>Encrypted with Public Key:</strong></p>
                        <p className="result-text">{data.encryptedPublic}</p>
                        <p className="result-label"><strong>Decrypted with Private Key:</strong></p>
                        <p className="result-text">{data.decryptedPrivate}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EncryptionDisplay;

