import { NextPage } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { Api } from '../utils/api';
import {PostItem} from "../utils/api/types";
import {AnotherPost} from "../components/AnotherPost";
import React from "react";

interface HomeProps {
    posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
        {
            posts.map((obj) => (
                <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} views={obj.views} />
            ))
        }
        <AnotherPost/>
    </MainLayout>
  );
}


export const getServerSideProps = async (ctx) => {
    try {
        const posts = await Api().post.getAll();
        return {
            props: {
                posts,
            }
        }
    } catch (e) {
        console.log(e)
    }
    return {
        props: {
            posts: null,
        }
    }
}

export default  Home;




    //  {
    //     try {
    //         const posts = await Api().post.getAll();
    //         return {
    //         props: {
    //             posts,
    //         }
    //         }
    //     } catch (e) {
    //         console.log(e)
    //      }
    //      return {
    //         props: {
    //             posts: null,
    //         }
    //      }
    // });

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//     (store) => async (ctx) => {
//     try {
//         const {authToken} = parseCookies(ctx);
//
//        const userData = await UserApi.getMe(authToken);
//
//        store.dispatch(setUserData(userData))
//
//
//         return {props: {}};
//     } catch (e) {
//         console.log(e);
//         return {props: {}};
//     }
// });