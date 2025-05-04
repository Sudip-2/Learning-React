import { useState } from 'react'
import { useForm } from "react-hook-form"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    await fetch("http://localhost:3000/",{method:"POST",headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify(data)})
    console.log(data)
    // if(data.user != 'sudip'){
    //   setError('myForm',{message:"Invalid UserName"})
    // }
  }

  return (
    <>
      <div className="container">
        {isSubmitting && <div>Loading...</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("user", {
             required: { value: true, message: "Enter Your name" },
             minLength:{value:3,message:"Min length is 3"} }
             )}
            placeholder='Enter Username' />
          <br />
          {errors.user && <div>{errors.user.message}</div>}
          <input type="password" {...register("pass", { required:{value:true,message:"Value in this field required"} })}
           placeholder='Enter Password' />
           {errors.pass && <div>{errors.pass.message}</div>}
          <br />
          {/* <select {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select> */}
          <button disabled = {isSubmitting} type="submit">Submit</button>
          {errors.myForm && <div>{errors.myForm.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
