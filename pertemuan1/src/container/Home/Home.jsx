import React, {Component, Fragment, createContext} from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../product/product'
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DetailPost from '../BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
// import { GLobalConsumer } from '../../context/context';
// import {connect} from 'react-redux'


class Home extends Component{
    render (){
        return (
            <Router>
                <Fragment>
                    <div>
                        <Link to="/">BlogPost</Link>
                        <Link to="/youtube">youtube</Link>
                        <Link to="/product">product</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/youtube" component={YouTubeComp} />
                    <Route path="/product" component={Product} />  
                    <hr/>
                    {/* <p>nilai redux: {this.props.state.totalOrder}</p> */}
                    </Fragment>
            </Router>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Home);
export default GlobalProvider(Home);