import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Modal.css';

function Modal({ onClose }) {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const resetMessages = () => {
        setErrorMessage('');
        setSuccessMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const inputs = form.current.querySelectorAll('[required]');
        let allValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                input.setCustomValidity("Este campo es obligatorio.");
                input.reportValidity();
                allValid = false;
            } else {
                input.setCustomValidity("");
            }
        });

        if (!allValid) {
            setErrorMessage('Por favor completa todos los campos obligatorios.');
            setSuccessMessage('');
            return;
        }

        emailjs
            .sendForm('service_wtu3n3a', 'template_qg1rvfb', form.current, {
                publicKey: 'j9EOpBHoYFvLuFC_Q',
            })
            .then(
                () => {
                    setSuccessMessage('¡Mensaje enviado con éxito!');
                    setErrorMessage('');
                    form.current.reset();

                    // Ocultar mensaje de éxito después de 3 segundos
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setErrorMessage('Hubo un problema al enviar el mensaje.');
                    setSuccessMessage('');
                }
            );
    };

    // Limpiar mensajes cuando se cierre el modal
    const handleClose = () => {
        resetMessages();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className='modal-title'>Send me a message</p>
                <p className='modal-description'>Please fill in the form below to get in touch with me :D</p>
                <button className="close-button" onClick={handleClose}>X</button>

                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className='full-name'>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name *"
                            required
                        />
                        <input
                            type="text"
                            name="user_last_name"
                            placeholder="Last name *"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email *"
                        required
                    />
                    <input
                        type="tel"
                        name="user_phone"
                        placeholder="Phone number"
                    />
                    <textarea
                        name="message"
                        placeholder="Message *"
                        required
                    />
                    <div className='send-button-container'>
                        <button type="submit" className='send-button'>Send</button>
                    </div>

                    {/* Mensajes */}
                    {errorMessage && <p className="form-message error">{errorMessage}</p>}
                    {successMessage && <p className="form-message success">{successMessage}</p>}

                </form>
            </div>
        </div>
    );
}

export default Modal;
