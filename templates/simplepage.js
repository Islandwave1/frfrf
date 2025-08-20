
import Head from 'next/head'
import Nav from '../components/Nav'
export default function SimplePage({title, content, authed}){
  return (<>
    <Head><title>{title} — IslandWave</title></Head>
    <Nav authed={authed} />
    <div className="container"><div className="card"><h1>{title}</h1><p>{content}</p></div></div>
  </>)
}
