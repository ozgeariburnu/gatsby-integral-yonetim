import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';

type BlogProps = {};

const Blog: React.FunctionComponent<BlogProps> = (props) => {
    return (
        <PersonalBlogWrapper {...props}>
            <Posts />
        </PersonalBlogWrapper>
    );
};

export default Blog;