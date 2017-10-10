import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/PostList';
import Post from '../components/Post';

const Layout = () => (
    <div>
        <main>
            <Route path="/" exact component={Home}/>
            <Route path="/post/:postId" component={Post}/>
        </main>
    </div>
);

export default Layout;
