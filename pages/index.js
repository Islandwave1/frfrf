import Link from 'next/link';

export default function Home() {
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <h1>Welcome to IslandWave</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" frameBorder="0" allowFullScreen></iframe>
      <p>
        <Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
}