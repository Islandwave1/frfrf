
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function Events({authed}){
  return (
    <>
      <Head><title>Events — IslandWave</title></Head>
      <Nav authed={authed} />
      <div className="container">
        <h1>Events</h1>
        <div className="grid">
          <div className="card">
            <h3>IslandWave Open House</h3>
            <p>Meet the team and test drive 1 Gbps speeds.</p>
          </div>
          <div className="card">
            <h3>Community BBQ</h3>
            <p>Grab a burger, win swag, and learn Wi‑Fi tips.</p>
          </div>
        </div>
      </div>
    </>
  )
}
