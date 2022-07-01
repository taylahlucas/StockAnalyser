import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  // Must use dispatch with NextJS and Redux to prevent automatically
  // disabling the Automatic Static Optimization 
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Start fetching companies here
  }, [dispatch])

  return (
    <div>
      <nav>
        {/* <h1 className={`heading lightTextColour`}
          onClick={() => Router.push('/company_search')}>StockAnalyser.</h1> */}
          <Link href='/company_search'>
            <h1 className={`heading lightTextColour`}>StockAnalyser.</h1>
          </Link>
      </nav>
    </div>
  )
}

//className={`heading red`}