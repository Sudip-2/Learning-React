import { useState } from 'react'

function App() {

  let [color,setColor] = useState('white')

  return (
    <>
      <div className=' w-full h-svh flex justify-center items-end' style={{backgroundColor:color}}>
        <div className='px-5 py-3 mb-10 rounded-full flex gap-4 flex-wrap shadow-lg bg-slate-300'>
          <button className='px-4 py-2 rounded-full bg-red-600 text-white font-semibold'onClick={() => setColor('red')}>Red</button>
          <button className='px-4 py-2 rounded-full bg-green-500 text-white font-semibold' onClick={() => setColor('green')}>Green</button>
          <button className='px-4 py-2 rounded-full bg-blue-500 text-white font-semibold' onClick={() => setColor('blue')}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
