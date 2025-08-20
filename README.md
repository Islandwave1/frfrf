# IslandWave ISP Website

## ✅ Features:
- Google Login & Email Authentication (Firebase)
- Customer Dashboard with Stripe test mode
- YouTube Live Embed
- Legal Pages (Canadian compliance)
- Ready for Vercel deployment

## 🔐 Firebase Setup:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project, enable Authentication (Google + Email/Password)
3. Copy your Firebase config and add it to `firebaseConfig.js`

## 💳 Stripe Setup:
1. Create an account at [Stripe](https://stripe.com/)
2. Use **test keys** for now
3. Add keys to `.env.local` file:
```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_public_test_key
STRIPE_SECRET_KEY=your_secret_test_key
```

## 🚀 Deploy on Vercel:
1. Upload this folder to [Vercel](https://vercel.com)
2. Add Firebase and Stripe keys in Environment Variables
3. Deploy!

---

Made for IslandWave.
