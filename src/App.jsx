
import './App.css'
import LainChat from './components/Lainchat/LainChat'
// import Navbar from './components/Navbar/Navbar'
import Nav from './components/Nav'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phon from './components/Phon/phon'
function App() {

  return (
    <>
<Nav></Nav>

    {/* <Navbar></Navbar> */}
    <PriceOptions></PriceOptions>
    <LainChat></LainChat>
    <Phon></Phon>
  <h className="text-2xl bg-red-800">vite+React</h>
  
    </>
  )
}

export default App
