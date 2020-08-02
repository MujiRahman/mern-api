import React, {Component, Fragment} from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../product/product'
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DetailPost from '../BlogPost/DetailPost/DetailPost';

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
                </Fragment>
            </Router>
        )
    }
}

export default Home;