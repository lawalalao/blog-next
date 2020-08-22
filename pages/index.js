import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPosts } from '../lib/posts'
import Date from '../components/date'

export default function Home({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.introductoryParagraph}><em>"It is your attitude, more than your aptitude, that will determine your altitude"</em></p>
        <p className={utilStyles.introductoryParagraph}>Software Engineer ∙ Content creator ∙ Tools agnostic ∙ Technical writer</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Have a look at my articles...</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ postID, title, date, snippet }) => (
            <li className={utilStyles.listItem} key={postID}>
              <Link href="/[postID]" as={`/${postID}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <div className={utilStyles.snippet}>
                {snippet}
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