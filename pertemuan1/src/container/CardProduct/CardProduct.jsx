import React, {Component} from 'react';
import { GLobalConsumer } from '../../context/context';
// import {connect} from 'react-redux';
// import ActionType from '../../redux/reducer/globalactiontype';
// import {RootContext} from '../Home/Home'

class CardProduct extends Component {
    // state = {
    //     order: 4
    // }

    // handleConterChange =(newValue)=>{
    //     this.props.onCounterChange(newValue)
    // }

    // handlerPlus = () =>{
    //     this.setState({
    //         order: this.state.order + 1
    //     },() =>{
    //         this.handleConterChange(this.state.order);
    //     })
    // }

    // handlerMinus = () =>{
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         },() =>{
    //             this.handleConterChange(this.state.order);
    //         })
    //     }
    // }

    render(){
        // console.log(this.props);
        return(
            <div className="card">
                                <div className="img-thumb-prod">
                                    <img src="" alt=""/>
                                </div>
                                <p className="product-title">Daging ayam bumbu</p>
                                <p className="product-prise">Rp413.000</p>
                                <div className="counter">
                                    <button className="minus" onClick={()=> this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                                    <input type="text" value={this.props.state.totalOrder} />
                                    <button className="plus" onClick={()=> this.props.dispatch({type:'PLUS_ORDER'})}>+</button>
                                </div>
                            </div>
            // <RootContext.Consumer>
            //     {
            //         value => {
            //             console.log('value', value);
            //             return (
                                                        
            //             )
            //         }
            //     }
            // </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlerPlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handlerMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (CardProduct);
export default GLobalConsumer(CardProduct);