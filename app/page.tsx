export default function Maintenance() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#FFC107',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '3em', margin: '0 0 20px 0' }}>🚧 Maintenance Mode</h1>
        <p style={{ fontSize: '1.2em', margin: 0 }}>Portfolio site is under maintenance.</p>
        <p style={{ fontSize: '1em', color: '#999', marginTop: '20px' }}>We'll be back soon!</p>
      </div>
    </div>
  )
}
