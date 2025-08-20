
import Head from 'next/head'
import Nav from '../components/Nav'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed } }
}

const PLANS=[
  {id:'basic', name:'Island Basic', speed:'100 Mbps', price:49, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC || 'price_basic_placeholder'},
  {id:'plus',  name:'Island Plus',  speed:'300 Mbps', price:69, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PLUS  || 'price_plus_placeholder'},
  {id:'pro',   name:'Island Pro',   speed:'1 Gbps',   price:99, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO   || 'price_pro_placeholder'}
]

export default function Plans({authed}){
  return (<>
    <Head><title>Plans — IslandWave</title></Head>
    <Nav authed={authed} />
    <div className="container">
      <h1>Choose your plan</h1>
      <div className="grid">
        {PLANS.map(p=>(
          <div key={p.id} className="card">
            <h3>{p.name}</h3><p>{p.speed}</p><p><b>${p.price}/mo</b></p>
            <a className="btn" href={`/signup?plan=${p.id}`}>Get Started</a>
          </div>
        ))}
      </div>
    </div>
  </>)
}
