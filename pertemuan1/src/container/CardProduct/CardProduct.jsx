import React, {Component} from 'react';
import {connect} from 'react-redux';


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
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="" alt=""/>
                </div>
                <p className="product-title">Daging ayam bumbu</p>
                <p className="product-prise">Rp413.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handlerMinus}>-</button>
                    <input type="text" value={this.props.order}/>
                    <button className="plus" onClick={this.handlerPlus}>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerPlus: () => dispatch({type: 'PLUS_ORDER'}),
        handlerMinus: () => dispatch({type: 'MINUS_ORDER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CardProduct);