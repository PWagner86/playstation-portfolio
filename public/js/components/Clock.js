export default class Clock{

    tag;

    constructor(tag){
        this.tag = tag;
        setInterval(() => {
            this.showTime(this.tag);
        }, 500);
    };


    showTime(container){
       let hour = new Date().getHours();
       let minutes = new Date().getMinutes();
    
       hour = addZero(hour);
       minutes = addZero(minutes);

       container.innerHTML = `${hour}:${minutes}`;

       function addZero(i){
            if(i < 10){
                i = `0${i}`;
            }
            return i;
        };
    };
}