
export const config = { api: { bodyParser: false } }

export default async function handler(req, res){
  // Optional: implement Stripe webhook signing & event handling here.
  // For now, this is a placeholder to be filled when you need automated provisioning or invoice events.
  res.status(200).end('ok')
}
