import Clock from './components/Clock.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

// Variables
const preview = document.querySelector('.preview');

const clockContainer = document.querySelector('.clock h6');
const clock = new Clock(clockContainer);

const skillsBtn = document.querySelector('.skills');
const skills = new Skills(preview);

const contactBtn = document.querySelector('.contact');
const contact = new Contact(preview);

// Events
skillsBtn.addEventListener('click', () => showContent(skills));
contactBtn.addEventListener('click', () => showContent(contact));

// Functions
function showContent(content){
    preview.innerHTML = '';
    content.createContent();
};