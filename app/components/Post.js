import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
    width: '30px',
    height: 'auto'
};

const Post = ({data}) => (
    <Card>
        <CardMedia
            overlay={<CardTitle title={data.title} subtitle={data.author}/>}
        >
            <img src={data.image.fields.file.url} alt="" style={style}/>
        </CardMedia>
        <CardText>
            {data.description}
        </CardText>
    </Card>
);

export default Post;
