import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import SideBar from '../common/components/side_bar/side_bar'

export default function Home() {
  // Must use dispatch with NextJS and Redux to prevent automatically
  // disabling the Automatic Static Optimization 
  return (
    <SideBar />
  )
}