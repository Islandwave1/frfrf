
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IslandWave - Vancouver Island ISP</title>
      </Head>
      <header style={{ backgroundColor: '#0a3d62', color: 'white', padding: '20px', textAlign: 'center' }}>
        <img src="/logo.png" alt="IslandWave Logo" style={{ height: '60px' }} />
        <nav style={{ marginTop: '10px' }}>
          <Link href="/" style={{ margin: '0 15px', color: 'white' }}>Home</Link>
          <Link href="/news" style={{ margin: '0 15px', color: 'white' }}>Local News</Link>
          <Link href="/events" style={{ margin: '0 15px', color: 'white' }}>Events</Link>
          <Link href="/signup" style={{ margin: '0 15px', color: 'white' }}>Sign Up</Link>
          <Link href="/portal" style={{ margin: '0 15px', color: 'white' }}>Customer Portal</Link>
          <Link href="/contact" style={{ margin: '0 15px', color: 'white' }}>Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to IslandWave</h1>
        <p>Your community-focused Internet Service Provider on Vancouver Island.</p>
        <div style={{ marginTop: '20px' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=Islandwavenet" frameBorder="0" allowFullScreen></iframe>
        </div>
      </main>
      <footer style={{ backgroundColor: '#0a3d62', color: 'white', padding: '20px', textAlign: 'center', marginTop: '40px' }}>
        <p>© {new Date().getFullYear()} IslandWave Communications. All rights reserved.</p>
        <Link href="/legal" style={{ color: 'white' }}>Legal</Link>
      </footer>
    </div>
  );
}
