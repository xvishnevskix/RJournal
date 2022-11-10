import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import {PostComments} from "../../components/PostComments";
import {GetServerSideProps, NextPage} from 'next';
import {Api} from "../../utils/api";
import {PostItem, ResponseUser} from "../../utils/api/types";


interface FullPostPageProps {
    post: PostItem;
    users: ResponseUser
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post, users }) => {
    console.log(post.user.postsCount)
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost fullName={post.user.fullName}
                      title={post.title}
                      blocks={post.body}
                      commentsCount={users?.commentsCount}
                      postsCount={users?.postsCount}
                      views={post.views}
            />

            <PostComments  postId={post.id}/>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const id = ctx.params.id;
        const post = await Api(ctx).post.getOne(+id);

        return {
            props: {
                post,
            },
        };
    } catch (err) {
        console.log('Full post page', err);
        return {
            props: {},
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
};

export default FullPostPage;
