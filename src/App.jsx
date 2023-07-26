import './App.css'
import Title from './components/Title/Title'
import About from './components/About/About'
import exampleImage from './assets/example.jpg'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-slate-950'>
      <Title/>
      <div className='z-20 fixed top-0 right-0 bg-principal rounded-lg px-2'>
        <a className='text-black text-time'>Get In Touch</a>
      </div>
      <div className='z-10 relative'>
        <img src={exampleImage} alt="main image" className='w-screen'/>
      </div>
      <About />
      <Footer/>
    </div>
  )
}

export default App
