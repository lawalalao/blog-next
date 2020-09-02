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
              <div className={"p-6 border-2 border-opacity-75 border-purple-500 rounded-lg shadow-2xl"}>
                <Link href='/[postID]' as={`/${postID}`}>
                  <a className={"text-xl font-black tracking-wide text-purple-400 hover:text-purple-600"}>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
                <hr className={"mt-2 mb-2"}/>
                <div className={"leading-relaxed"}>
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