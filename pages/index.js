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
        <h2 className={"mb-4 text-paragraph"}>Have a look at my articles...</h2>
        <ul>
          {postsData.map(({ postID, title, date }) => (
            <li key={postID}>
              <div className={"p-6 mb-4 bg-card-grey shadow-2xl"}>
                <Link href='/[postID]' as={`/${postID}`}>
                  <a className={"text-xl font-black tracking-wide"}>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
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