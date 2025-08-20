
import Head from 'next/head'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'

export async function getServerSideProps({ req, query }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  return { props: { authed, plan: query.plan || null } }
}

export default function SignUp({authed, plan}){
  const [data, setData] = useState({ plan: plan || 'basic', name:'', email:'', address:'', city:'', postal:'' })
  useEffect(()=>{},[plan])
  const submit = (e)=>{
    e.preventDefault()
    // For now, store locally and show a confirmation. In production use a database.
    localStorage.setItem('iw_signup', JSON.stringify(data))
    alert('Thanks! We received your signup. We will contact you to finalize installation and billing.')
    window.location.href='/signin'
  }
  return (
    <>
      <Head><title>Sign Up — IslandWave</title></Head>
      <Nav authed={authed} />
      <div className="container">
        <h1>Sign up for IslandWave</h1>
        <div className="card">
          <form onSubmit={submit}>
            <label>Plan</label>
            <select value={data.plan} onChange={e=>setData({...data, plan:e.target.value})}>
              <option value="basic">Island Basic — 100 Mbps</option>
              <option value="plus">Island Plus — 300 Mbps</option>
              <option value="pro">Island Pro — 1 Gbps</option>
            </select>
            <label>Name</label>
            <input value={data.name} onChange={e=>setData({...data, name:e.target.value})} required />
            <label>Email</label>
            <input type="email" value={data.email} onChange={e=>setData({...data, email:e.target.value})} required />
            <label>Address</label>
            <input value={data.address} onChange={e=>setData({...data, address:e.target.value})} required />
            <label>City</label>
            <input value={data.city} onChange={e=>setData({...data, city:e.target.value})} required />
            <label>Postal Code</label>
            <input value={data.postal} onChange={e=>setData({...data, postal:e.target.value})} required />
            <div style={{height:12}} />
            <button className="btn" type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  )
}
