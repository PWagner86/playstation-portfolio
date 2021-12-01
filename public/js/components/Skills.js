export default class Skills{

    container;

    constructor(container){
        this.container = container
    };

    createContent(){
        const div = document.createElement('div');
        div.classList.add('skills-wrapper');
        const template = `
        <h4>Skills</h4>
        <div class="upper">
            <div class="prev-cach html">
                <img src="../pics/html5.png" alt="html-logo">
            </div>
            <div class="prev-cach css">
                <img src="../pics/css3.jpg" alt="css-logo">
            </div>
            <div class="prev-cach sass">
                <img src="../pics/sass.png" alt="sass-logo">
            </div>
            <div class="prev-cach js">
                <img src="../pics/js.svg" alt="javascript-logo">
            </div>
            <div class="prev-cach ts">
                <img src="../pics/ts.png" alt="typescript-logo">
            </div>
        </div>
        <div class="lower">
            <div class="prev-cach node">
                <img src="../pics/node.png" alt="node-logo">
            </div>
            <div class="prev-cach php">
                <img src="../pics/php.svg" alt="php-logo">
            </div>
            <div class="prev-cach sql">
                <img src="../pics/mysql.svg" alt="mysql-logo">
            </div>
            <div class="prev-cach sql">
                <img src="../pics/react.svg" alt="mysql-logo">
            </div>

        </div>
        `;
        div.innerHTML = template;
        this.container.append(div);
    };
};