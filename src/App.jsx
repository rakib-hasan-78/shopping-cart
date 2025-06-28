import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='xxl-title'>Vite + React</h1>
      <h3 className='xl-title'>Vite + React</h3>
      <h2 className='lg-title'>Vite + React</h2>
      <h3 className='md-title'>Vite + React</h3>
      <h3 className='sm-title'>Vite + React</h3>
      <h3 className='xs-title'>Vite + React</h3>
      <div className="card">
        <button className='btn btn-error' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="brief">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
