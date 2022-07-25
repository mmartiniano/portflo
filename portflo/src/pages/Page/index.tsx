import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Context } from '../../context';
import getContent from '../../utils/getContent';
import { useParams } from 'react-router';
import { Grid } from './styles';
import Image from '../../components/Image';
import Container from '../../components/Container';

interface IPost {
    url: string,
    title: string,
    thumbnail: string,
    expand: boolean
}

const Page: React.FC = () => {
    const { page } = useParams();
    const content = getContent();
    const context = useContext(Context);

    const current_language = context!.state.language || content.language[0];

    const getPosts = useCallback((): IPost[] | undefined => {
        try {
            const current_page = content.page[page || ''];
            return Object.keys(current_page.content!).map(key => {
                let post = current_page.content![key];
                let result: IPost = {
                    url: key,
                    title: post.title[current_language],
                    thumbnail: post.thumbnail,
                    expand: post.expand || false
                };

                return result;
            })
        }
        catch {
            return
        }
    }, [page, content, current_language]);

    const getColumns = useCallback((): string => {
        return content.page[page || ''].columns;
    }, [page, content])

    const [posts, setPosts] = useState<IPost[] | undefined>(getPosts());
    const [emptyText, setEmptyText] = useState<string>(content.empty[current_language]);
    const [columns, setColumns] = useState<string>(getColumns());

    useEffect(() => {
        console.log(getPosts());
        setPosts(getPosts());
        setEmptyText(content.empty[current_language]);
        setColumns(getColumns());
    }, [page, context, getPosts, getColumns, content, current_language]);

    return (
        <Container>
            {posts && posts.length > 0 ? (
                <Grid columns={columns}>
                    {
                        posts!.map((post, key) => (
                            <div key={key}>
                                <Image src={post.thumbnail} hover />
                                <p>{post.title}</p>
                            </div>
                        ))
                    }
                </Grid>
            ) : (
                <p>{emptyText}</p>
            )}
        </Container>
    )
}

export default Page;