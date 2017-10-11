import React, {PropTypes} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux';
import {fetchPostSingleFromAPI} from '../actions/data';

const style = {
    width: '30%',
    height: 'auto',
    margin: 'auto'
};

class Post extends React.Component {

    componentDidMount() {
        this.props.fetchSingleData();
    }

    render() {
        const {post} = this.props;
        if (this.props.fetching) {
            return <CircularProgress/>;
        }else {
            return (
                <div style={style}>
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title={post.title} subtitle={post.author}/>}
                        >
                            {post.image.fields &&
                                <img src={post.image.fields.file.url} alt="" style={style}/>
                            }
                        </CardMedia>
                        <CardText>
                            {post.description}
                        </CardText>
                        <RaisedButton label="Back" primary={true} fullWidth={true} href="/" />
                    </Card>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return state.data;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchSingleData: () => dispatch(fetchPostSingleFromAPI(ownProps.match.params.postId))
    };
};

Post.propTypes = {
    fetchSingleData: PropTypes.func,
    fetching: PropTypes.bool,
    post: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
