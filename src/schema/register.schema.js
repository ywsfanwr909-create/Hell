

import *  as z from 'zod'


export const registerSchema =z.object({
name:  z.string().nonempty('Name required').min(3 ,'min 3 char').max(15 ,"max 15 char"),
email: z.email('inValid Email'),
password:z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "invalid password"),
rePassword:z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "invalid password"),

dateOfBirth: z.coerce.date().refine(function (val) {
return  new Date().getFullYear() - val.getFullYear() >= 16 ? true :false
} , "Age Must be above 16").transform(function (date) {
    return  `${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`
}),

gender: z.enum(['male' ,'female'] , " Gender is Required")
}).refine(function (dog) {
return dog.rePassword === dog.password ? true :false
},{message:"passwords are not  match",path :['repassword']})
