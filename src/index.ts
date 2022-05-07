import './style/index.less';
console.log("hello tyza66");

class Food {
    element: HTMLElement;

    constructor() {
        //获取页面中的food元素
        this.element = document.getElementById("food")!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        //0-290
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
        this.element.style.top =  Math.round(Math.random() * 29) * 10 + 'px';
    }
}

/*
const food = new Food();
console.log(food.X, food.Y);

food.change();
console.log(food.X, food.Y);
*/

class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(){
         this.scoreEle = document.getElementById('score')!;
         this.levelEle = document.getElementById('level')!;
    }
}