import { useState } from 'react'
import usecurrencyinfo from './hooks/usecurrencyinfo.js'
import Inputbox from './components/inputbox.jsx'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setfrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = usecurrencyinfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setfrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
    <div className='w-full h-svh flex justify-center items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(https://cdn.pixabay.com/photo/2015/11/06/17/04/dollar-1029742_1280.jpg)`}}>
    <div className='w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form onSubmit={(e) => {
        e.preventDefault() 
        convert()}}>
          <div className="w-full mb-1">
            <Inputbox 
            amount = {amount}
            onAmountChange = {(amount) => setAmount(amount)}
            onCurrencyChange = {(currency) => setfrom(currency)}
            selectedCurrency = {from}
            currencyOptions = {options}
            label = "from"
            />
          </div>

          <div className="relative w-full h-0.5">
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-300 rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
          </div>

          <div className="w-full mb-1">
            <Inputbox 
            amount = {convertedAmount}
            onCurrencyChange = {(currency) => setTo(currency)}
            selectedCurrency = {to}
            currencyOptions = {options}
            amountDisabled
            label = "to"
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default App
