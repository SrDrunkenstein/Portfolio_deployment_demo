import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Modal.css'; // Asegúrate de tener estilos

function Modal({ onClose }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wtu3n3a', 'template_qg1rvfb', form.current, {
                publicKey: 'j9EOpBHoYFvLuFC_Q',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    onClose(); // cerrar modal al éxito si quieres
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className='modal-title'>Send me a message</p>
                <p className='modal-description'>Please fill in the form bellow to get int touch with me :D</p>
                <button className="close-button" onClick={onClose}>X</button>
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
                </form>
            </div>
        </div>

    );
}

export default Modal;