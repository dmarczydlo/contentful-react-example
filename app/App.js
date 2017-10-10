import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {BrowserRouter} from 'react-router-dom';
import Index from './router';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <BrowserRouter>
                        <Index />
                    </BrowserRouter>
                </div>
            </MuiThemeProvider>
        );
    }
}
