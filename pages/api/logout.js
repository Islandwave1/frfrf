
import { serialize } from 'cookie'
export default function handler(req,res){
  res.setHeader('Set-Cookie', [
    serialize('iw_session', '', { path:'/', maxAge:0 }),
    serialize('iw_email', '', { path:'/', maxAge:0 }),
  ])
  res.writeHead(302, { Location: '/' })
  res.end()
}
