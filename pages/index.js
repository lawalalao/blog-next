import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getPosts } from '../lib/posts'
import Date from '../components/date'

export default function Home({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={"mt-10"}>
        <h2 className={"mb-4"}>Have a look at my articles...</h2>
        <ul>
          {postsData.map(({ postID, title, date, excerpt }) => (
            <li key={postID}>
              <div className={"bg-gray-800 p-6"}>
                <Link href='/[postID]' as={`/${postID}`}>
                  <a className={"text-xl font-black"}>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
                <br />
                <div>
                  {excerpt}
                </div>
              </div>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const postsData = getPosts()

  return {
    props: {
      postsData
    }
  }
}