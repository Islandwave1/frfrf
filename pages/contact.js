
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function Contact({authed}){
  return (
    <>
      <Head><title>Contact — IslandWave</title></Head>
      <Nav authed={authed} />
      <div className="container">
        <h1>Contact</h1>
        <div className="card">
          <p>Email: support@islandwave.ca</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </>
  )
}
