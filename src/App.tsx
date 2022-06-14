import React from 'react';

function App() {
  const selectTheme = (theme: string) => {
    document.body.className = `theme-${theme}`;
  }

  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='text-center'>
        <h1>Select Theme</h1>
        <div className="d-flex justify-content-center mb-4" style={{ gap: 10 }}>
          <button className="btn btn-primary" onClick={() => selectTheme('default')}>Default</button>
          <button className="btn btn-secondary" onClick={() => selectTheme('orgola')}>Orgola</button>
        </div>
        <div className="d-flex justify-content-center fw-bold" style={{ gap: 10 }}>
          <div className="text-primary">Primary</div>
          <div className="text-secondary">Secondary</div>
          <div className="text-success">Success</div>
          <div className="text-info">Info</div>
          <div className="text-warning">Warning</div>
          <div className="text-danger">Danger</div>
        </div>
      </div>
    </div>
  );
}

export default App;
