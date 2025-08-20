
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function Home({authed}){
  return (
    <>
      <Head><title>IslandWave — Vancouver Island ISP</title></Head>
      <Nav authed={authed} />
      <div className="container">
        <div className="card">
          <h1>Stay connected to your island, your way.</h1>
          <p>Local internet plans, community live streams, events, and a secure customer portal.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:16}}>
            <a className="btn" href="/plans">View Plans</a>
            <a className="btn secondary" href={authed?'/portal':'/signin'}>{authed?'Go to Portal':'Create Account'}</a>
          </div>
        </div>

        <div className="section">
          <div className="grid">
            <div className="card">
              <h3>Fast Local Internet</h3>
              <p>Unlimited data, low latency. Built for Vancouver Island.</p>
            </div>
            <div className="card">
              <h3>Customer Portal</h3>
              <p>Pay bills, manage your plan, book service calls, and buy IslandWave swag.</p>
            </div>
            <div className="card">
              <h3>Live Community Feed</h3>
              <p>Watch live streams of local events and happenings across the island.</p>
            </div>
          </div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} IslandWave</footer>
    </>
  )
}
