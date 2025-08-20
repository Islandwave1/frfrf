
import Stripe from 'stripe'
import { parse } from 'cookie'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' })

export default async function handler(req, res){
  if(!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error:'Missing STRIPE_SECRET_KEY' })
  const cookies = parse(req.headers.cookie || '')
  const email = cookies.iw_email
  if(!email) return res.status(401).json({ error:'Not signed in' })
  try{
    const customers = await stripe.customers.list({ email, limit: 1 })
    const customer = customers.data[0]
    if(!customer) return res.status(200).json({ invoices: [] })
    const invoices = await stripe.invoices.list({ customer: customer.id, limit: 12 })
    res.status(200).json({ invoices: invoices.data })
  }catch(e){ res.status(400).json({ error: e.message }) }
}
