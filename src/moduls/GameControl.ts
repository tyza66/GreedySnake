import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';


class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    //蛇的移动方向
    direction: String = '';

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this))
    }

    keydownHandler(event: KeyboardEvent){
        //console.log(event.key);
        
        this.direction = event.key;
    }
}

export default GameControl;