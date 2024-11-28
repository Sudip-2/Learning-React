import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  let [length, setlenghth] = useState('8')
  let [numberAllowed, setnumberAllowed] = useState(false)
  let [charAllowed, setcharAllowed] = useState(false)
  let [password, setPassword] = useState('')
  const generatePass = useCallback(() => {
    let pass =""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_+-"
    for(let i = 0; i< length;i++){
      const charIndexNum = Math.floor(Math.random()*str.length) 
      pass += str.charAt(charIndexNum)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePass()
  }
  ,[length,numberAllowed,charAllowed])

  const passwordRef = useRef(null)

  const copyPass = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  return (
    <>
      <div className='w-full h-svh bg-slate-900 flex justify-center items-start'>
        <div className='bg-slate-800 shadow-xl px-5 py-4 mt-5 rounded-lg'>
          <h1 className='text-white text-xl font-medium text-center my-2'>Password Generator</h1>
          <div className='flex'>
            <input type="text" className='rounded-l-lg outline-none w-full px-2' readOnly value={password} ref={passwordRef}/>
            <button className='bg-blue-700 rounded-r-lg hover:bg-blue-800 text-white px-4 py-2' onClick={copyPass}>Copy</button>
          </div>
          <div className='flex gap-1 justify-center md:gap-3 mt-2'>
            <input type="range" min={6} max={20} value={length} onChange={(e) => setlenghth(e.target.value)} />
            <label htmlFor="length" className='text-white'>Length {length}</label>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setnumberAllowed((prev) => !prev)}/>
            <label htmlFor="length" className='text-white'>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setcharAllowed((prev) => !prev)}/>
            <label htmlFor="length" className='text-white'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
