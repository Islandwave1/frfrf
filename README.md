
# IslandWave — ISP Website + Customer Portal (Stripe)

Vercel-ready Next.js app with:
- Marketing pages, Live (YouTube), Plans
- Sign Up → Stripe Checkout subscription
- Sign In → Customer Portal
- Billing page with Stripe **Customer Portal** + **Invoice list**
- Service Call + Swag pages (placeholders)

## Environment Variables (Vercel → Settings → Environment Variables)
```
JWT_SECRET=any-long-random-string
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_SITE_URL=https://your-deployment-url.vercel.app
NEXT_PUBLIC_STRIPE_PRICE_BASIC=price_xxx
NEXT_PUBLIC_STRIPE_PRICE_PLUS=price_xxx
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_xxx
```
Create Products & Prices in Stripe (recurring monthly) and paste the **Price IDs** above.

## Deploy
1. Upload this folder to Vercel (New Project → Upload).
2. Add the env vars above.
3. Deploy.
4. Visit `/plans` → `Sign up` → you’ll be redirected to Stripe Checkout (test mode).

## Notes
- This starter searches/creates Stripe customers by email. In production, use a real auth system and store the Stripe customer ID in your DB.
- To accept real payments, activate your Stripe account and switch to live keys.
