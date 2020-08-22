import Head from 'next/head'
import Layout from '../components/layout'
import { getPostsIDs, getPostData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
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