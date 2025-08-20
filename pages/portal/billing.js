
import Head from 'next/head'
import Nav from '../../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(!authed){ return { redirect: { destination: '/signin', permanent: false } } }
  return { props: {} }
}

export default function Billing(){
  return (
    <>
      <Head><title>Billing — IslandWave</title></Head>
      <Nav authed={true} />
      <div className="container">
        <h1>Billing</h1>
        <div className="card">
          <p><b>Next invoice:</b> $69.00 due on the 1st.</p>
          <p>This is a placeholder. When ready, connect Stripe or your preferred payment gateway here.</p>
          <button className="btn" disabled>Pay Now (coming soon)</button>
        </div>
        <div className="section">
          <h3>History</h3>
          <div className="card">
            <ul>
              <li>July — $69.00 — Paid</li>
              <li>June — $69.00 — Paid</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
