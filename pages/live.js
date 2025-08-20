
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

export default function Live({authed}){
  return (<>
    <Head><title>IslandWave Live</title></Head>
    <Nav authed={authed} />
    <div className="container">
      <h1>Live Streams</h1>
      <div className="card" style={{overflow:'hidden'}}>
        <div style={{position:'relative', paddingBottom:'56.25%', height:0}}>
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_HERE"
            title="IslandWave Live"
            style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </>)
}
