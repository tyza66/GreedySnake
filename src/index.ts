import './style/index.less';
import GameControl  from './moduls/GameControl';

console.log("hello tyza66");
const gc = new GameControl();
setInterval(() =>{
    console.log(gc.direction);
},1000);



/* 测试Food类
const food = new Food();
console.log(food.X, food.Y);

food.change();
console.log(food.X, food.Y);
*/

