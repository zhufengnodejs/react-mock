class Component {
    constructor(props){
      this.props = props;
    }
    createDOMFromString(domStr){
        let div = document.createElement('div');
        div.innerHTML = domStr;
        return div.firstElementChild;
    }
    setState(newState){
        this.state = newState;
        let oldEle = this.ele;
        let parentEle = oldEle.parentElement;
        let newButton = this.createElement();
        parentEle.replaceChild(newButton,oldEle);
    }
    createElement(){
        this.ele = this.createDOMFromString(this.render());
        this.ele.addEventListener('click',this.handleClick.bind(this))
        return this.ele;
    }
    $mount(container){
        this.createElement();
        container.appendChild(this.ele);
    }
}
window.React = {
    Component
}