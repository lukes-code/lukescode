import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import StorePicker from "./StorePicker";
import App from "../App";
import FullBlog from "./FullBlog";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/blog/:blogId" component={FullBlog} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
);

export default Router;