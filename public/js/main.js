import Clock from './components/Clock.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Particle from './components/Particle.js';
import Project from './components/Project.js';

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

const dashBtn = document.querySelector('.dashboard');
const dashDescription = 'Der Benutzer kann sich registrieren und einloggen. Sobald man eingeloggt ist, kommt man auf sein Dashboard. Dort hat man verschiedene Optionen zur Auswahl. Man kann Farbschema, Layout, Destination, usw. ändern. Die Änderungen werden in einer Datenbank gespeichert. Im Dashboard werden Wetterdaten sowie Newsartikel mit einem AJAX Request geladen. Beide Requests werden nach einer gewissen Zeit neu versendet um auf dem aktuellen Stand zu bleiben.'
const dashboard = new Project(preview, 'Create your Dashboard', dashDescription, 'https://github.com/PWagner86/create_your_dashboard', 'Github-Repo', 'dashboard.jpg', 'dashpic1.jpg', 'dashpic2.jpg', 'dashpic3.jpg');

const visBtn = document.querySelector('.visualizer');
const visDescription = 'Livingroom Visualizer is a schoolproject about a CMS written in PHP, mySQL, JavaScript, HTML and SASS. The goal is that the admin can add, delete and update news to the site and check the amount of registered users and their informations. As a loged in user, you can use the visualizer. This is a 3D environment build in three.js where you can load different furniture in a room, move and rotate them and create your virtual livingroom.'
const visualizer = new Project(preview, 'Livingromm Visualizer', visDescription, 'https://github.com/PWagner86/livingroom_visualizer', 'Github-Repo', 'visualizer.png', 'vispic1.jpg', 'vispic2.jpg', 'vispic3.jpg');

const bannerBtn = document.querySelector('.banner');
const bannerDescription = 'Eine Banneranimation welche mit GSAP und Howler.js gemacht wurde. (nicht responsiv)';
const banner = new Project(preview, 'AXA Banneranimation', bannerDescription, 'https://pwagner86.github.io/banner_animation_axa/', 'Zur Animation', 'axa_logo.png', 'bannerpic1.jpg', 'bannerpic2.jpg', 'bannerpic3.jpg');


// Events
for(let i = 0; i < 200; i++){
    particles[i] = new Particle(ctx, cWidth, cHeigth);
};

setInterval(redrawParticles);

skillsBtn.addEventListener('click', () => showContent(skills));
contactBtn.addEventListener('click', () => showContent(contact));
dashBtn.addEventListener('click', () => showContent(dashboard));
visBtn.addEventListener('click', () => showContent(visualizer));
bannerBtn.addEventListener('click', () => showContent(banner));

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

// Create Particles
function redrawParticles(){
    ctx.clearRect(0, 0, cWidth, cHeigth);
    particles.forEach(particle => particle.show());
    particles.forEach(particle => particle.float());
}