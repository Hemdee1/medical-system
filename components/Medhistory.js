import React from 'react'

function Medhistory({type}) {
    return (
        <div className='active px-4 rounded-lg my-4 text-lg lg:text-xl py-2'>
            <div className='flex justify-between'>
                <p className='font-normal'>{type}</p>
                <p className='font-bold '>25 March, 2023</p>
            </div>
            <p className='mt-3'><small className='font-normal'>Consultation with Dr. Agu Jonas</small></p>
        </div>
    )
}

export default Medhistory
