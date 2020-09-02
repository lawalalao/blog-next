import Head from "next/head";
import Link from "next/link";

const name = "Catalin Pit";
export const siteTitle = "Catalin's Blog"

export default function Layout({ children, home }) {
  return (
    <div className={"bg-gray-900 text-white min-h-screen min-w-full"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A blog written by Catalin Pit" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={"text-center mb-24 pt-10"}>
        {home ? (
          <>
            <h1 className={"lg:text-6xl md:text-6xl text-3xl"}>{name}</h1>
            <h6 className={"tracking-wider italic"}>'It is your attitude, more than your aptitude, that will determine your altitude'</h6>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                <a className={"text-6xl"}>{name}</a>
              </Link>
            </h2>
            <h6 className={"tracking-wider italic"}>'It is your attitude, more than your aptitude, that will determine your altitude'</h6>
          </>
        )}
      </header>
      <main className={
        `
          container 
          mx-auto
          lg:w-1/2
          px-6
         `
      }>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
