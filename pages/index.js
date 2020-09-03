import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITENAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>{SITENAME}</title>
        </Head>
        <Container>
          <Intro />
          <div className={"lg:px-48"}>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
