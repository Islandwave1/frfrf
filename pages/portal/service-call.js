
import Head from 'next/head'
import Nav from '../../components/Nav'
import { useState } from 'react'

export async function getServerSideProps({ req }){
  const authed = Boolean(req.cookies && req.cookies.iw_session)
  if(!authed){ return { redirect:{ destination:'/signin', permanent:false } } }
  return { props:{} }
}

export default function ServiceCall(){
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ date:'', window:'AM', notes:'' })
  const submit = (e)=>{ e.preventDefault(); localStorage.setItem('iw_service_request', JSON.stringify(form)); setSubmitted(true); }
  return (<>
    <Head><title>Service Call — IslandWave</title></Head>
    <Nav authed={true} />
    <div className="container">
      <h1>Book a Service Call</h1>
      <div className="card">
        {!submitted ? (<form onSubmit={submit}>
          <label>Preferred Date</label><input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
          <label>Time Window</label><select value={form.window} onChange={e=>setForm({...form, window:e.target.value})}><option>AM</option><option>PM</option></select>
          <label>Notes</label><textarea rows="4" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Describe the issue" />
          <div style={{height:12}} /><button className="btn" type="submit">Submit Request</button>
        </form>) : (<p>Thanks! Your request was recorded. We’ll email you a confirmation shortly.</p>)}
      </div>
    </div>
  </>)
}
