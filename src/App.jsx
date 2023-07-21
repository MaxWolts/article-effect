import './App.css'
import Title from './components/Title/Title'
import About from './components/About/About'
import exampleImage from './assets/example.jpg'

function App() {

  return (
    <div className='bg-slate-950'>
      <Title/>
      <div >
        <img src={exampleImage} alt="main image" className='w-screen'/>
      </div>
      <About />
    </div>
  )
}

export default App
