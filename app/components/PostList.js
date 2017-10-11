import React, {PropTypes} from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux';
import {fetchPostRequestFromAPI} from '../actions/data';


const styles = {
    top: {
        marginTop: '30px',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '50%',
        height: 900,
        overflowY: 'auto',
    },
};

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    displayPosts = () => {
        if (this.props.fetching) {
            return <CircularProgress/>;
        } else {
            const listItems = this.props.posts.map((post, index) =>
            <GridTile
                key={index}
                title={post.data.title}
                subtitle={<span>by <b>{post.data.author}</b></span>}
                actionIcon={<IconButton href={`/post/${post.id}`}><StarBorder color="white" /></IconButton>}
            >
                <img src={post.data.image.fields.file.url} />
            </GridTile>
            );
            return (
                <div style={styles.root}>
                    <GridList
                        cellHeight={300}
                        style={styles.gridList}
                    >
                        {listItems}
                    </GridList>
                </div>
            );
        }
    };

    render() {
        return (<div style={styles.top}>{this.displayPosts()}</div>);
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

PostList.propTypes = {
    fetchData: PropTypes.func,
    fetching: PropTypes.bool,
    posts: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

