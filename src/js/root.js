/**
 *Created bj luodaise on 2018/6/6
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import PCNewsDetails from './components/pc_news_details';
import PCUserCenter from './components/pc_usercenter'
import MobileUserCenter from './components/mobile_usercenter'
import 'antd/dist/antd.css';
export default class Root extends React.Component{
    render(){
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                            <Route path="/usercenter" component={PCUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={MobileIndex}></Route>
                            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                            <Route path="/usercenter" component={MobileUserCenter}></Route>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>

            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));