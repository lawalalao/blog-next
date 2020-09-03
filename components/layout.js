import Head from "next/head"
import Link from "next/link"

const name = "Catalin Pit";
export const siteTitle = "Catalin's Blog"

export default function Layout({ children, home }) {
  return (
    <div className={"flex flex-col min-h-screen bg-lighter-black"}>
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
      <header className={"text-center mb-12 p-12 bg-footer-color shadow-inner"}>
        {home ? (
          <>
            <h1 className={"lg:text-6xl md:text-6xl text-3xl text-white font-extrabold"}>{name}</h1>
            <h6 className={"tracking-wider italic px-4 text-paragraph"}>'It is your attitude, more than your aptitude, that will determine your altitude'</h6>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                <a className={"lg:text-6xl md:text-6xl text-3xl text-white font-extrabold"}>{name}</a>
              </Link>
            </h2>
            <h6 className={"tracking-wider italic px-4 text-paragraph"}>'It is your attitude, more than your aptitude, that will determine your altitude'</h6>
          </>
        )}
      </header>
      <main className={
        `
          container 
          mx-auto
          lg:w-1/2
          px-6
          mb-auto
         `
      }>{children}</main>
      {!home && (
        <div className={"text-center p-8"}>
          <Link href="/">
            <a className={"bg-transparent hover:bg-purple-700 text-purple-500 hover:text-white p-3 rounded-lg"}>← Back to home</a>
          </Link>
        </div>
      )}
      <section className={"shadow-inner text-center text-white"}>
        <div className={"bg-footer-color p-12"}>Built and designed by Catalin Pit</div>
      </section>
    </div>
  );
}
