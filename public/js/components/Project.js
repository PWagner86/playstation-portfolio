export default class Project{

    container;
    title;
    description;
    link;
    text;
    logo;
    pic1;
    pic2;
    pic3;
    picPreview;

    constructor(container, title, description, link, text, logo, pic1, pic2, pic3, picPreview){
        this.container = container;
        this.title = title;
        this.description = description;
        this.link = link;
        this.text = text;
        this.logo = logo;
        this.pic1 = pic1;
        this.pic2 = pic2;
        this.pic3 = pic3;
        this.picPreview = picPreview;
    };

    createContent(){
        const div = document.createElement('div');
        div.classList.add('project-wrapper');
        const template = `
        <h4>${this.title}</h4>  
        <div class="description">
            <p>${this.description}</p>
            <a href="${this.link}" target="_blank">${this.text}</a>
        </div>
        <div class="project-pics">
            <div class="project-pic prev-cach">
                <img class="logo" src="/pics/${this.logo}" alt="project-logo">
            </div>
            <div class="project-pic prev-cach">
                <img src="/pics/${this.pic1}" alt="screenshot from project">
            </div>
            <div class="project-pic prev-cach">
                <img src="/pics/${this.pic2}" alt="screenshot from project">
            </div>
            <div class="project-pic prev-cach">
                <img src="/pics/${this.pic3}" alt="screenshot from project">
            </div>
        </div>
        `;
        div.innerHTML = template;
        this.container.append(div);
    };
};