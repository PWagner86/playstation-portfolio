export default class Contact{

    container;

    constructor(container){
        this.container = container;
    };

    createContent(){
        const div = document.createElement('div');
        div.classList.add('contact-wrapper');
        const template = `
        <h4>Contact</h4>
        <div class="ct-wrapper">
            <div class="prev-cach mail">
                <a href="mailto:peter.wagner1986@gmail.com">Email:<br>peter.wagner1986@gmail.com</a>
            </div>
            <div class="prev-cach phone">
                <a href="tel:+41787347317">Phone:<br>078 734 73 17</a>
            </div>
        </div>
        `;
        div.innerHTML = template;
        this.container.append(div);
    };
};