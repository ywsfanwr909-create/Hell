
import { Alert, Button, Input } from '@heroui/react'
import {  useForm } from 'react-hook-form';
import ValidatonMessage from '../../../Components/Shared/ValidatonMessage/ValidatonMessage';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import { isValid } from 'zod/v3';
import { loginSchema } from '../../../schema/login.schema';
import AppButton from '../../../Components/Shared/AppButton/AppButton';



export default function Login() {

  const navigate =  useNavigate()
  const [succces, setsuccces] = useState("")
  let timeoutID;


const  {handleSubmit ,register ,formState:
  {errors ,touchedFields ,isValid ,isSubmitting}} = useForm({ mode: "onSubmit",resolver:zodResolver(loginSchema) ,
    defaultValues: {
    email: "",
    password: "",
  },}) ;




function SubmitForm(data) {
  console.log("Submitted",data);
  setsuccces("Tamammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
  timeoutID= setTimeout(() => {                     
    navigate("/")       // is loading بتاعت البوتون مش هتظهر علشان مفيش await ,async
  }, 3000);

}

useEffect(() => {
  return () => {
    clearTimeout(timeoutID)
  }
}, [])



  return (
    <>
    <section className='py-20'>
      <div className="max-w-100 md:max-w-1/3 lg:max-h-1/2 mx-auto ">
        <h1 className='font-bold text-center text-4xl'>Log in</h1>

        {succces && <Alert color={"success"}  title={succces}/> }
        
        <form onSubmit={handleSubmit(SubmitForm)}  className='p-12 flex flex-col gap-4 bg-white shadow-lg rounded'>

          <Input  label="Email"   {...register("email")}   type="email"    variant='bordered'/>

          <Input  label="Password"  {...register("password")}  type="password"    variant='bordered'/>
            <ValidatonMessage field={errors.password} isTouched={touchedFields.password}/>

          <AppButton type='submit' color="danger" >Log m in</AppButton>
          <Link className='text-red-500' to={"/register"}>Create a new Account</Link>
        </form>
      </div>
    </section>
    </>
  )
}



