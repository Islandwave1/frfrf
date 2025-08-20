
import Image from 'next/image';
import Link from 'next/link';

export default function Nav({authed}){
  return (
    <div className="nav">
      <div className="brand">
        <Image src="/logo.png" width={36} height={36} alt="IslandWave logo" />
        <span>IslandWave</span>
      </div>
      <Link href="/">Home</Link>
      <Link href="/live">Live</Link>
      <Link href="/plans">Plans</Link>
      <Link href="/news">News</Link>
      <Link href="/events">Events</Link>
      <Link href="/contact">Contact</Link>
      <div style={{marginLeft:'auto'}} />
      {authed ? (
        <>
          <Link href="/portal"><span className="badge">My Portal</span></Link>
          <a href="/api/logout" style={{marginLeft:12}}>Logout</a>
        </>
      ) : (
        <Link href="/signin"><span className="badge">Sign In</span></Link>
      )}
    </div>
  )
}
