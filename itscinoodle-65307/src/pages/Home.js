import React from 'react';
import Heads from '../component/Header';
import Footer from '../component/Footer';
import './Home.css';
import noodle1 from '../image/noodle1.jpg';
import noodle2 from '../image/noodle2.jpg';
import noodle3 from '../image/noodle3.jpg';

function Home() {
    return (
    <div class="Wall">
        <Heads />
        <div class = "container">
            <h1 class = "title"><strong>ยินดีเข้าสู่ร้านก๋วยเตี๋ยว ITSci Noodle Shop</strong></h1>
            <div class = "imgs">
                <img class = "img1" src={noodle1} />
                <img class = "img2" src={noodle2} />
                <img class = "img3" src={noodle3} />
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Home;