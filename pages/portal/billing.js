
import Head from 'next/head'
import Nav from '../../components/Nav'
import { useEffect, useState } from 'react'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(!authed){ return { redirect:{ destination:'/signin', permanent:false } } }
  return { props:{} }
}

export default function Billing(){
  const [loading, setLoading] = useState(true)
  const [invoices, setInvoices] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    const load = async ()=>{
      try{
        const r = await fetch('/api/stripe/invoices')
        const j = await r.json()
        if(!r.ok) throw new Error(j.error || 'Failed to load invoices')
        setInvoices(j.invoices || [])
      }catch(e){ setError(e.message) }finally{ setLoading(false) }
    }
    load()
  }, [])

  return (<>
    <Head><title>Billing — IslandWave</title></Head>
    <Nav authed={true} />
    <div className="container">
      <h1>Billing</h1>
      <div className="card">
        <p>Use the buttons below to manage your subscription and payment method securely via Stripe.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a className="btn" href="/api/stripe/create-portal">Open Customer Portal</a>
        </div>
      </div>
      <div className="section">
        <h3>Invoices</h3>
        <div className="card">
          {loading && <p>Loading…</p>}
          {error && <p style={{color:'crimson'}}>Error: {error}</p>}
          {!loading && !error && invoices.length === 0 && <p>No invoices yet.</p>}
          {!loading && invoices.length>0 && (
            <table>
              <thead><tr><th>Date</th><th>Number</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {invoices.map(inv => (
                  <tr key={inv.id}>
                    <td>{new Date(inv.created*1000).toLocaleDateString()}</td>
                    <td>{inv.number || '—'}</td>
                    <td>${(inv.amount_paid/100).toFixed(2)}</td>
                    <td>{inv.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  </>)
}
