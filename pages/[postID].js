import Head from 'next/head'
import Layout from '../components/layout'
import { getPostsIDs, getPostData } from '../lib/posts'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1>{postData.title}</h1>
            <div>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
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