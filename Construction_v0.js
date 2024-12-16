// React.js Frontend
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <h1>BuildInvest</h1>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#invest">Invest</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="hero">
                <div className="hero-text">
                    <h2>Invest in Construction Projects That Shape the Future</h2>
                    <p>Your gateway to profitable and secure investment opportunities in the construction industry.</p>
                    <a href="#invest" className="btn">Get Started</a>
                </div>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>BuildInvest connects investors with high-potential construction projects, ensuring transparency and profitability every step of the way. With years of industry experience, we make construction investments easy and rewarding.</p>
            </section>

            <section id="projects">
                <h2>Our Projects</h2>
                <div className="project">
                    <h3>Green Tower Apartments</h3>
                    <p>A state-of-the-art residential building designed for sustainable living.</p>
                </div>
                <div className="project">
                    <h3>Blue Ridge Office Park</h3>
                    <p>A modern office park in the heart of the business district.</p>
                </div>
            </section>

            <section id="invest">
                <h2>Why Invest?</h2>
                <ul>
                    <li>High ROI from top-tier construction projects.</li>
                    <li>Full transparency and regular progress updates.</li>
                    <li>Support from industry professionals.</li>
                </ul>
                <a href="#contact" className="btn">Contact Us to Invest</a>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <form action="/api/contact" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2024 BuildInvest. All rights reserved.</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Node.js Backend
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/constructionInvestments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).send('Message sent successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

// Add this in your HTML file:
// <div id="root"></div>
// <script src="index.js" defer></script>
