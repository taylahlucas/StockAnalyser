import Layout from '../common/components/layout'

export default function Home() {
  // Must use dispatch with NextJS and Redux to prevent automatically
  // disabling the Automatic Static Optimization 
  return (
    <div>
      <Layout />
    </div>
  )
}