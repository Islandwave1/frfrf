
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function Home({authed}){
  return (<>
    <Head><title>IslandWave — Vancouver Island ISP</title></Head>
    <Nav authed={authed} />
    <div className="container">
      <div className="card">
        <h1>Stay connected to your island, your way.</h1>
        <p>Local internet plans, community live streams, events, and a secure customer portal.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:16}}>
          <a className="btn" href="/plans">View Plans</a>
          <a className="btn secondary" href={authed?'/portal':'/signup'}>{authed?'Go to Portal':'Sign Up'}</a>
        </div>
      </div>
    </div>
    <footer>© {new Date().getFullYear()} IslandWave</footer>
  </>)
}
