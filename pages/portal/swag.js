
import Head from 'next/head'
import Nav from '../../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(!authed){ return { redirect: { destination: '/signin', permanent: false } } }
  return { props: {} }
}

export default function Swag(){
  return (
    <>
      <Head><title>Swag — IslandWave</title></Head>
      <Nav authed={true} />
      <div className="container">
        <h1>IslandWave Swag</h1>
        <div className="grid">
          <div className="card">
            <h3>IslandWave Hat</h3>
            <p>$20.00</p>
            <button className="btn" disabled>Add to Cart (coming soon)</button>
          </div>
          <div className="card">
            <h3>IslandWave Tee</h3>
            <p>$25.00</p>
            <button className="btn" disabled>Add to Cart (coming soon)</button>
          </div>
        </div>
      </div>
    </>
  )
}
