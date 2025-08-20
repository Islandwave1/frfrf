
import Stripe from 'stripe'
import { parse } from 'cookie'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' })

export default async function handler(req, res){
  if(!process.env.STRIPE_SECRET_KEY) return res.status(500).send('Missing STRIPE_SECRET_KEY')
  const cookies = parse(req.headers.cookie || '')
  const email = cookies.iw_email
  if(!email) return res.redirect(302, '/signin')
  try{
    const customers = await stripe.customers.list({ email, limit: 1 })
    const customer = customers.data[0]
    if(!customer) return res.redirect(302, '/signup')
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/portal/billing`
    })
    res.writeHead(302, { Location: session.url }); res.end()
  }catch(e){ res.status(400).send(e.message) }
}
