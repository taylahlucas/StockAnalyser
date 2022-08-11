import Layout from '../common/components/layout'

export default function Home() {
  // TODO: Must use dispatch with NextJS and Redux to prevent automatically
  // disabling the Automatic Static Optimization 
  return (
    <div className='screenBackground'>
      <Layout />
    </div>
  )
}