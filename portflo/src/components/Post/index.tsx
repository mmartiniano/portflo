import React, { ImgHTMLAttributes, PropsWithChildren } from 'react';
import { ISubContent } from '../../@types';
import Image from '../Image';
import { Title as StyledTitle } from './styles';

export interface IPreviewProps {
    url: string,
    title: string,
    thumbnail: string,
    expand: boolean
}

interface SubCoponents {
    Preview: React.FC<IPreviewProps>,
    // Cover: React.FC,
    Title: React.FC,
    // Content: React.FC
}

interface IProps {
    post: ISubContent
}


const Title: React.FC<PropsWithChildren> = ({ children }) => (
    <StyledTitle>{children}</StyledTitle>
);

const Preview: React.FC<IPreviewProps> = ({ url, title, thumbnail, expand }) => (
    <div>
        <Image src={thumbnail} hover />
        <Title>{title}</Title>
    </div>
)

const Post: React.FC<IProps> & SubCoponents = ({ post, ...rest }) => (
    <>
    </>
)

Post.Preview = Preview;
Post.Title = Title;

export default Post;