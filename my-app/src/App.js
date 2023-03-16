// 函数是组件 传参需要使用箭头函数绑定形式
function App () {
    function onItemClick(str) {
        console.log(str)
    }
    return (
        <button onClick={() =>onItemClick('牛啊牛啊')}>点我一下</button>
    )
}
// import React from "react";
// class App extends React.Component{
//     // constructor() {
//     //     super();
//     //     this.onItemClick = this.onItemClick.bind(this)
//     // }
//     onItemClick(str) {
//         console.log(str)
//     }
//     render() {
//         return(
//             // 类组件  绑定事件 通过bind绑定this
//             // <button onClick={this.onItemClick.bind(this,'jaja')}>这是一个按钮</button>
//             // 在构造器绑定好this
//             // <button onClick={() =>this.onItemClick('jaja')}>这是一个按钮</button>
//             // <button onClick={this.onItemClick}>这是一个按钮</button>
//         )
//     }
// }

export default App;
