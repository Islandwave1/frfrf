
import Head from 'next/head'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'

export async function getServerSideProps({ req, query }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed, plan: query.plan || 'basic' } }
}

export default function SignUp({authed, plan}){
  const [form, setForm] = useState({ plan, name:'', email:'', address:'', city:'', postal:'' })
  const submit = async (e)=>{
    e.preventDefault()
    const r = await fetch('/api/stripe/create-checkout', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    const data = await r.json()
    if(!r.ok){ alert(data.error || 'Checkout failed'); return }
    window.location.href = data.url
  }
  return (<>
    <Head><title>Sign Up — IslandWave</title></Head>
    <Nav authed={authed} />
    <div className="container">
      <h1>Sign up for IslandWave</h1>
      <div className="card">
        <form onSubmit={submit}>
          <label>Plan</label>
          <select value={form.plan} onChange={e=>setForm({...form, plan:e.target.value})}>
            <option value="basic">Island Basic — 100 Mbps</option>
            <option value="plus">Island Plus — 300 Mbps</option>
            <option value="pro">Island Pro — 1 Gbps</option>
          </select>
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <label>Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <label>Address</label>
          <input value={form.address} onChange={e=>setForm({...form, address:e.target.value})} required />
          <label>City</label>
          <input value={form.city} onChange={e=>setForm({...form, city:e.target.value})} required />
          <label>Postal Code</label>
          <input value={form.postal} onChange={e=>setForm({...form, postal:e.target.value})} required />
          <div style={{height:12}} />
          <button className="btn" type="submit">Continue to Payment</button>
        </form>
      </div>
      <p style={{opacity:.7, fontSize:'.9rem'}}>Payment handled securely by Stripe. You’ll be redirected to checkout.</p>
    </div>
  </>)
}
