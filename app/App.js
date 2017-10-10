import React, {PropTypes} from 'react';
import Post from './components/Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import {fetchPostRequestFromAPI} from './actions/data';
import CircularProgress from 'material-ui/CircularProgress';


const style = {
    width: '40%'
};

class App extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    displayPosts = () => {
        if (this.props.fetching) {
            return <CircularProgress/>;
        } else {
            const listItems = this.props.posts.map((post, index) =>
                <Post key={index} data={post}/>
            );
            return (
                <div style={style}>
                    {listItems}
                </div>
            );
        }
    };


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    {this.displayPosts()}
                </div>
            </MuiThemeProvider>
        );
    }
}


const mapStateToProps = (state) => {
    return state.data;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchPostRequestFromAPI())
    };
};

App.propTypes = {
    fetchData: PropTypes.func,
    fetching: PropTypes.bool,
    posts: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

