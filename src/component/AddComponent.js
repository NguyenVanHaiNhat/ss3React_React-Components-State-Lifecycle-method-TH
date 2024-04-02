// import {Component} from "react";
//
// export default class AddComponent extends Component{
//     render() {
//         return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
//     }
// }

export function AddComponent(props){
    return (
        <h1>Total : {props.firstNumber + props.secondNumber}</h1>
    )
}