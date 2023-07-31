import './App.css'
import Title from './components/Title/Title'
import About from './components/About/About'
import exampleImage from './assets/example.jpg'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-slate-950'>
      <Title/>
      
      <div className='z-10 relative px-4'>
        <img src={exampleImage} alt="main image" className='w-screen rounded-lg'/>
      </div>
      <About />
      <Footer/>
    </div>
  )
}

export default App
