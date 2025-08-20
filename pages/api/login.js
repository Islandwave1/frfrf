
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { email } = req.body || {}
  if(!email) return res.status(400).json({ error:'Email required' })
  // Create a very simple signed token (demo only)
  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'islandwave-demo-secret', { expiresIn: '7d' })
  res.setHeader('Set-Cookie', [
    serialize('iw_session', token, { httpOnly:true, path:'/', maxAge: 60*60*24*7 }),
    serialize('iw_email', email, { httpOnly:false, path:'/', maxAge: 60*60*24*7 }),
  ])
  res.status(200).json({ ok:true })
}
