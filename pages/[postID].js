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
            <div className={"bg-gray-800 p-6"}>
                <h1 className={"text-4xl font-black"}>{postData.title}</h1>
                <small>
                  Posted on <Date dateString={postData.date} />
                </small>
            </div>
            <br/>
            <div className={"bg-gray-800 p-6"}>
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