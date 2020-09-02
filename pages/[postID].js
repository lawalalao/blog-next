import Head from 'next/head'
import Layout from '../components/layout'
import { getPostsIDs, getPostData } from '../lib/posts'
import Date from '../components/date'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className={"p-6 border-2 border-opacity-75 border-purple-500 rounded-lg shadow-2xl"}>
                <h1 className={"text-xl font-black"}>{postData.title}</h1>
                <small>
                  Posted on <Date dateString={postData.date} />
                </small>
            </div>
            <br/>
            <div className={"p-6 border-2 border-opacity-75 border-purple-500 rounded-lg shadow-2xl"}>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPostsIDs()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.postID)

    return {
        props: {
            postData
        }
    }
}