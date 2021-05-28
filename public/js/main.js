import Clock from './components/Clock.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Particle from './components/Particle.js';

// Variables
const cWrapper = document.querySelector('.canvas-wrapper');
const c = document.querySelector('#canvas');
const cWidth = cWrapper.clientWidth;
const cHeigth = cWrapper.clientHeight;
const ctx = c.getContext('2d', { alpha: true });
const particles = [];

const preview = document.querySelector('.preview');

const clockContainer = document.querySelector('.clock h6');
const clock = new Clock(clockContainer);

const skillsBtn = document.querySelector('.skills');
const skills = new Skills(preview);

const contactBtn = document.querySelector('.contact');
const contact = new Contact(preview);


// Events
for(let i = 0; i < 200; i++){
    particles[i] = new Particle(ctx, cWidth, cHeigth);
};

setInterval(redrawParticles);

skillsBtn.addEventListener('click', () => showContent(skills));
contactBtn.addEventListener('click', () => showContent(contact));

canvasResizing();

// Functions
function showContent(content){
    preview.innerHTML = '';
    content.createContent();
};

function canvasResizing(){
    c.height = cHeigth;
    c.width = cWidth;
    redrawParticles();
};

function redrawParticles(){
    ctx.clearRect(0, 0, cWidth, cHeigth);
    particles.forEach(particle => particle.show());
    particles.forEach(particle => particle.float());
}