
import Stripe from 'stripe'
import { serialize } from 'cookie'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' })

const PLAN_TO_PRICE = {
  basic: process.env.STRIPE_PRICE_BASIC || process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC,
  plus:  process.env.STRIPE_PRICE_PLUS  || process.env.NEXT_PUBLIC_STRIPE_PRICE_PLUS,
  pro:   process.env.STRIPE_PRICE_PRO   || process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO,
}

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  if(!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error:'Missing STRIPE_SECRET_KEY' })
  const { plan='basic', name, email, address, city, postal } = req.body || {}
  try{
    // find or create customer
    const customers = await stripe.customers.list({ email, limit: 1 })
    const existing = customers.data[0]
    const customer = existing ? existing : await stripe.customers.create({
      email, name,
      address: { line1: address, city, postal_code: postal, country: 'CA' },
      metadata: { signup_city: city, plan_requested: plan }
    })

    const price = PLAN_TO_PRICE[plan]
    if(!price) return res.status(400).json({ error:'Missing Stripe Price ID for selected plan' })

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customer.id,
      line_items: [{ price, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/portal`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/signup?plan=${plan}`,
      automatic_tax: { enabled: false },
      allow_promotion_codes: true
    })

    res.status(200).json({ url: session.url })
  }catch(e){
    res.status(400).json({ error: e.message })
  }
}
