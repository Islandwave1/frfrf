
# IslandWave — ISP Website + Customer Portal (Starter)

This is a Vercel-ready Next.js app for IslandWave with:
- Public marketing pages (Home, Live, Plans, News, Events, Contact)
- Simple **sign-in** (email only) that sets a secure cookie (demo)
- **Customer Portal**: billing placeholder, service-call booking, swag store
- **Live page** with YouTube embed — replace `YOUR_CHANNEL_ID` in `pages/live.js`

## One-minute deploy (Vercel)
1. Create a new Vercel project and upload this folder
2. Add Environment Variable: `JWT_SECRET` (any long random string)
3. Deploy

## Notes
- This starter does **not** include real payments yet. Connect Stripe or your gateway inside `/portal/billing` later.
- Form submissions (sign-up, service-call) are saved to the browser's `localStorage` for demo purposes.
- For production, add a database (Supabase) + proper auth (NextAuth/Clerk).

