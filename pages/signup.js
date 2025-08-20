
import Head from 'next/head';

export default function SignUp() {
  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>Sign Up - IslandWave</title>
      </Head>
      <h1>Sign Up for IslandWave Services</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
        <input type="text" placeholder="Full Name" style={{ margin: '10px', padding: '10px' }} />
        <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px' }} />
        <input type="text" placeholder="Address" style={{ margin: '10px', padding: '10px' }} />
        <input type="text" placeholder="Phone" style={{ margin: '10px', padding: '10px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0a3d62', color: 'white' }}>Submit</button>
      </form>
    </div>
  );
}
