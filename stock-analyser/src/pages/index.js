import Layout from '../components/common/layout'

export default function Home() {
  // TODO: Must use dispatch with NextJS and Redux to prevent automatically
  // disabling the Automatic Static Optimization 
  return (
    <div className='darkGreyBackground'>
      <Layout />
    </div>
  )
}