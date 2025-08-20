
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <img src="/logo.png" alt="IslandWave" style={{height:'50px'}} />
        <h1>Welcome to IslandWave</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/live">Live</Link> | <Link href="/portal">Customer Portal</Link> | <Link href="/legal/terms">Legal</Link>
        </nav>
      </header>
      <main style={{padding:'20px'}}>
        <h2>Stay Connected with Vancouver Island</h2>
        <p>Watch our live stream below:</p>
        <div style={{textAlign:'center'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=@Islandwavenet" frameBorder="0" allowFullScreen></iframe>
        </div>
      </main>
      <footer>
        © 2025 IslandWave Communications. All Rights Reserved. | <Link href="/legal/terms">Terms</Link> | <Link href="/legal/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
