class LikeButton {
    constructor(){
        this.state = {liked:false};
    }
    handleClick(){
        this.state.liked = !this.state.liked;
        document.querySelector('.like-text').innerText = this.state.liked?'取消':'点赞';
    }
    render(){
        this.ele = createDOMFromString( `
             <button class="like-btn">
               <span class="like-text">点赞</span>
             </button>
            `);
        this.ele.addEventListener('click',this.handleClick.bind(this))
        return this.ele;
    }
}

function createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    return div.firstElementChild;
}