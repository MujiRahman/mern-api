import React, {Component, createContext, Children} from 'react';
import { createStore } from 'redux';

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return(
        class ParetComponent extends Component {
            state = {
                totalOrder: 5
            }
        
            dispatch = (action) => {
                if(action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === 'MINUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }
            render() {
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Cusumer
const Consumer = RootContext.Consumer;
export const GLobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component {
            render() {
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}