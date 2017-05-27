class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked:false};
    }

    handleClick(){
       this.setState({
           liked:!this.state.liked
       });
    }
    render(){
        return `
             <button class="like-btn">
               <span class="like-text">${this.props.name}:${this.state.liked?'取消':'点赞'}</span>
             </button>
            `
    }

}
