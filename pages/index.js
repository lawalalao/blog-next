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
      <section>
      <p>
          <a href='https://twitter.com/catalinmpit'>
            <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='20' />
          </a>
          <a href='https://www.instagram.com/catalinmpit'>
            <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='20' />
          </a>
          <a href='https://www.linkedin.com/in/catalinpit'>
            <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='20' />
          </a>
          <a href='https://dev.to/catalinmpit'>
            <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg' alt='twitter' height='20' />
          </a>
        </p>
        <p><em>'It is your attitude, more than your aptitude, that will determine your altitude'</em></p>
        <p>Software Engineer ∙ Content creator ∙ Tools agnostic ∙ Technical writer</p>
      </section>
      <section>
        <h2>Have a look at my articles...</h2>
        <ul>
          {postsData.map(({ postID, title, date, excerpt }) => (
            <li key={postID}>
              <Link href='/[postID]' as={`/${postID}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
              <br />
              <div>
                {excerpt}
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