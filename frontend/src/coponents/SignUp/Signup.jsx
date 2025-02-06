import react from 'react'
import {useState} from 'react'
import {FaUser} from "react-icons/fa";

function signup(){
    const[name,setName]=useState('')
    return(
        <div className='flex box-border h-screen justify-center items-center'>
            <div className='flex flex-col w-109 h-109 rounded-xl shadow-xl'>
                <div>
                    <h1 className='text-center mt-5 text-2xl font-bold'>create account</h1>
                </div>
                <div className='flex justify-center iems-center mt-5'>
                    <form className='flex flex-col justify-center items-center w-98'>
                        <div>
                            <input type='text' required value={name}/>
                        </div>
                    </form>
                </div>
            </div>
            

        </div>
    )
}

export default Signup