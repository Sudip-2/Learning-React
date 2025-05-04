import { useState } from 'react'
import BasicsOfFramer from './component/BasicsOfFramer.jsx'
import BasicsOfGestures from './component/BasicsOfGestures.jsx'
import Animationcontrol from './component/Animationcontrol.jsx'
import Viewbasedani from './component/Viewbasedani.jsx'
import Scrollinframer from './component/Scrollinframer.jsx'
import ImageFlipper from './component/ImageFlipper.jsx'
// import Phone from './component/Phone.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BasicsOfFramer/> */}
      {/* <BasicsOfGestures/> */}
      {/* <Animationcontrol/> */}
      {/* <Viewbasedani/> */}
      {/* <Scrollinframer/> */}
      {/* <Phone/> */}
      <ImageFlipper/>
    </>
  )
}

export default App
