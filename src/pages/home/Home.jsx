import React, { useState } from 'react';
import Header from '../global_components/Header.jsx';
import Card from './Card.jsx';
import Footer from '../global_components/Footer.jsx';
import Modal from '../global_components/Modal.jsx';
import '../../styles/home/Home.css'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className={isModalOpen ? 'blur' : ''}>
                <Header />
                <Card onContactClick={openModal} />
                {/* <Footer /> */}
            </div>
            {isModalOpen && <Modal onClose={closeModal} />}
        </>
    );
}

export default Home;
