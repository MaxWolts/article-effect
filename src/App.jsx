import './App.css'
import Title from './components/Title/Title'
import exampleImage from './assets/example.jpg'

function App() {

  return (
    <div className='bg-slate-950'>
      <Title />
      <div >
        <img src={exampleImage} alt="main image" className='w-screen'/>
      </div>
    </div>
  )
}

export default App
