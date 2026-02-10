import { Alert, Button, Input, Radio, RadioGroup } from '@heroui/react'
import { Controller, useForm } from 'react-hook-form';
import ValidatonMessage from '../../../Components/Shared/ValidatonMessage/ValidatonMessage';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Link, Links, useNavigate } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import { registerSchema } from '../../../schema/register.schema';
import AppButton from '../../../Components/Shared/AppButton/AppButton';
import { color } from 'framer-motion';

const API_URL = "https://linked-posts.routemisr.com/users/signup"


export default function Register() {

  const navigate =  useNavigate()
  const [succces, setsuccces] = useState("")
  const [errormessage, seterrormessage] = useState("")
  let timeoutID;


const  {handleSubmit ,register ,formState:
  {errors ,touchedFields ,isValid ,isSubmitting}, setError,getValues,watch, control} = useForm({ mode: "onTouched",resolver:zodResolver(registerSchema)}) ;
  const passwordVal =getValues ('password')
console.log(register("rePassword"));




async function SubmitForm(data) {
  console.log("Submitted",data);
  try {
  const res =  await axios.request({
      method:"POST" ,
      url : API_URL  ,
      data:data 
    })
      if (res.error) {
        throw new Error(res.error);
      }else{
          setsuccces("Fullllllllllllllllllllllllllllllllllllll")
  timeoutID= setTimeout(() => {                     
    navigate("/Login")      
  }, 3000);
      }
  } catch (error) {
    console.log(error.response.data.error);
    seterrormessage(error.response.data.error)
  }
}

useEffect(() => {
  return () => {
    clearTimeout(timeoutID)
  }
}, [])


console.log("errors:", errors);
console.log("isValid:", isValid);

  return (
    <>
    <section className='py-20'>
      <div className="max-w-100 md:max-w-1/3 lg:max-h-1/2 mx-auto ">
        <h1 className='font-bold text-center text-4xl'>Register</h1>

        {succces && <Alert color={"success"}  title={succces}/> }
        { errormessage &&<Alert color={"danger"}  title={errormessage}/> }
        
        <form onSubmit={handleSubmit(SubmitForm)}  className='p-12 flex flex-col gap-4 bg-white shadow-lg rounded'>
          <Input  label="Name" {...register("name")}    type="text"   variant='bordered'/>
            <ValidatonMessage field={errors.name} isTouched={touchedFields.name}/>
          <Input  label="Email"   {...register("email")}   type="email"    variant='bordered'/>

          <Input  label="Password"  {...register("password")}  type="password"    variant='bordered'/>
            <ValidatonMessage field={errors.password} isTouched={touchedFields.password}/>


            <Input  label="confirm password"  {...register("rePassword")}  type="password"    variant='bordered'/>
          <ValidatonMessage field={errors.rePassword } isTouched={touchedFields.rePassword}/>



          <Input  label="DateOfBirth" {...register("dateOfBirth")}   type="date"    variant='bordered'/>
          <ValidatonMessage field={errors.dateOfBirth} isTouched={touchedFields.dateOfBirth}/>
          

          <Controller control={control} name='gender'  render={ ( {field} )=> 
          <RadioGroup label="Gender" {...field}>
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </RadioGroup>} />
          <ValidatonMessage field={errors.gender} isTouched={touchedFields.gender }/>


          <AppButton type='submit' color="primary" > Register </AppButton>
        <Link className='text-blue-500' to={"/login"}>Already have an account ?</Link>
        </form>
      </div>
    </section>
    </>
  )
}

///////

