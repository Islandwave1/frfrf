
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function News({authed}){
  return (
    <>
      <Head><title>News — IslandWave</title></Head>
      <Nav authed={authed} />
      <div className="container">
        <h1>Local News</h1>
        <div className="grid">
          <div className="card">
            <h3>Fiber expansion update</h3>
            <p>We’re lighting up new streets across Nanaimo next month.</p>
          </div>
          <div className="card">
            <h3>Community partnership</h3>
            <p>Live streaming the Tofino Surf Cam this summer.</p>
          </div>
        </div>
      </div>
    </>
  )
}
