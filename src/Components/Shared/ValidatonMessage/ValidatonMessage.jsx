import React from 'react'

export default function ValidatonMessage({field ,isTouched}) {
    return (
        <>
    {field &&  isTouched &&
    <p className='text-red-600'>{field.message}</p>}
        </>
    )
}
