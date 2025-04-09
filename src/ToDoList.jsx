import React, { useState } from 'react'
import { MdCheck ,MdDeleteForever} from "react-icons/md";

function ToDoList() {
    const [inputValue , setinputValue]= useState("")
    const [Task , setTask]= useState([])
    const inputHandler = (value)=>{
        setinputValue(value)
    }
    const handeleForm=(e)=>{
        e.preventDefault()
        if (!inputValue.trim()) return;
        setTask((pre)=>{
            if (Task.includes(inputValue)) return pre;
            return[...pre,inputValue]
        }) 
        setinputValue("")           
    }
    return (
        <>
        <section className='flex flex-col h-screen justify-center items-center bg-blue-100 border border-b-black gap-4'>
            <div className=' flex flex-col items-center w-[25%] border border-e-blue-950 gap-2'>
            <header>
                <h1 className='text-3xl font-extrabold'>To Do App</h1>
            </header>
            <section>
                <form className='flex gap-2 'onSubmit={handeleForm}>
                    <div>
                        <input type="text" autoComplete='off' value={inputValue}
                        onChange={(e)=> inputHandler(e.target.value)}
                        className=' px-1 border border-amber-950 rounded-2xl' />
                    </div>
                    <div>
                        <button type='submit' className='bg-amber-950 text-amber-50 px-4 rounded-[4px]'>Add Task</button>
                    </div>
                </form>
            </section>
            </div>
            <section>
            <ul className='flex flex-col gap-4 bg-[#0b1a24] rounded-2xl p-4 border border-black'>
    {
        Task.map((cur, index) => {
            return (
                <li key={index} className='flex items-center justify-between bg-white px-3 py-2 rounded-lg shadow'>
                    <span className='text-black font-medium'>{cur}</span>
                    <div className='flex gap-3'>
                        <button className='bg-green-500 text-white p-1 rounded-full'>
                            <MdCheck />
                        </button>
                        <button className='bg-red-500 text-white p-1 rounded-full'>
                            <MdDeleteForever />
                        </button>
                    </div>
                </li>
            );
        })
    }
</ul>

            </section>
        </section>
        </>
    )
}

export default ToDoList
