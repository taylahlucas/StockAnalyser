import Head from 'next/head'
import Router from 'next/router'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={`heading lightTextColour`}
          onClick={() => Router.push('/company_search')}>StockAnalyser.</h1>
      </main>
    </div>
  )
}

//className={`heading red`}