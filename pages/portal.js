
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(!authed){ return { redirect: { destination: '/signin', permanent:false } } }
  const email = req.cookies.iw_email || null
  return { props:{ email } }
}

export default function Portal({email}){
  return (<>
    <Head><title>My Portal — IslandWave</title></Head>
    <Nav authed={true} />
    <div className="container">
      <h1>Welcome{email?`, ${email}`:''}</h1>
      <div className="grid">
        <div className="card"><h3>My Plan</h3><p>Manage your subscription and plan.</p><a className="btn" href="/portal/billing">Billing & Invoices</a></div>
        <div className="card"><h3>Service Call</h3><p>Book a technician visit.</p><a className="btn" href="/portal/service-call">Book Now</a></div>
        <div className="card"><h3>IslandWave Swag</h3><p>Hats, tees, and stickers.</p><a className="btn" href="/portal/swag">Shop</a></div>
      </div>
    </div>
  </>)
}
