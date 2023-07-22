import rgLogo from '/logo.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <div className='headline'>
          Shaping the future of public software, together.
        </div>
        <img src={rgLogo} className="logo" />
        <div className="links"><a href="https://github.com/ragusa-dev">github</a></div>
      </div>
    </>
  )
}

export default App
