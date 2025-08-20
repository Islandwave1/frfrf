
import Head from 'next/head'
import Nav from '../components/Nav'
import { useState } from 'react'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(authed){
    return { redirect: { destination: '/portal', permanent: false } }
  }
  return { props: { } }
}

export default function SignIn(){
  const [email, setEmail] = useState('')
  const onSubmit = async (e)=>{
    e.preventDefault()
    const res = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) })
    if(res.ok){ window.location.href='/portal' } else { alert('Sign-in failed') }
  }
  return (
    <>
      <Head><title>Sign In — IslandWave</title></Head>
      <Nav authed={false} />
      <div className="container">
        <div className="card">
          <h1>Sign In / Create Account</h1>
          <p>Enter your email to access your portal. (Payments can be added later.)</p>
          <form onSubmit={onSubmit}>
            <label>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@islandwave.ca" />
            <div style={{height:12}} />
            <button className="btn" type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  )
}
