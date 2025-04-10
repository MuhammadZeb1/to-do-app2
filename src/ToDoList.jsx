import React, { useEffect, useState } from 'react'
import { MdCheck ,MdDeleteForever} from "react-icons/md";

function ToDoList() {
    const [inputValue , setinputValue]= useState("")
    const [Task , setTask]= useState([])
    const [dateTime, setdateTime]= useState([])
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

    // to do app
  useEffect(()=>{
     const intervel = setInterval(()=>{
     const date= new Date();
    const  formateDate = date.toLocaleDateString()
    const  formateTime = date.toLocaleTimeString()
    setdateTime(`${formateDate}-${formateTime}`)
   },1000)
   return()=> clearInterval(intervel)
  },[])
//   delete the items
const deleteItem = (indexToDelete)=>{
   const updateTask = Task.filter((_,index)=> index != indexToDelete)
   setTask(updateTask)
}
// clear all 
const clearAll = ()=>{
    return setTask([])
}
    return (
        <>
        <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-white px-4 py-6">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
    <h1 className="text-3xl font-bold text-center text-white">ToDo List</h1>
    <p className="text-center text-sm text-gray-300">{dateTime}</p>

    <form onSubmit={handeleForm} className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => inputHandler(e.target.value)}
        placeholder="Add new task"
        className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold">
        Add Task
      </button>
    </form>

    <ul className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500">
      {Task.map((cur, index) => (
        <li key={index} className="bg-white/20 text-white backdrop-blur-sm px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
          <span className="font-medium">{cur}</span>
          <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
              <MdCheck />
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full" onClick={() => deleteItem(index)}>
              <MdDeleteForever />
            </button>
          </div>
        </li>
      ))}
    </ul>

    {Task.length > 0 && (
      <div className="pt-2 text-right">
        <button onClick={clearAll} className="bg-red-700 hover:bg-red-800 px-4 py-1 rounded-lg font-bold text-white">
          Clear All
        </button>
      </div>
    )}
  </div>
</section>

        {/* <section className='flex flex-col h-screen justify-center items-center bg-blue-100 border border-b-black gap-4'>
            <div className=' flex flex-col items-center w-[25%] gap-2'>
            <header>
                <h1 className='text-3xl font-extrabold'>To Do App</h1>
            </header>
            <div>
                <h2>{dateTime}</h2>
            </div>
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
            <ul className='flex flex-col gap-4 rounded-2xl p-4 '>
    {
        Task.map((cur, index) => {
            return (
                <li key={index} className='flex items-center justify-between bg-white px-3 py-2 rounded-lg shadow'>
                    <span className='text-black font-medium'>{cur}</span>
                    <div className='flex gap-3'>
                        <button className='bg-green-500 text-white p-1 rounded-full'>
                            <MdCheck />
                        </button>
                        <button className='bg-red-500 text-white p-1 rounded-full'onClick={()=>deleteItem(index)}>
                            <MdDeleteForever />
                        </button>
                    </div>
                </li>
            );
        })
    }
</ul>

        <div className='flex justify-end'>
        <button className='bg-red-900  px-4 rounded-[3px] font-bold' onClick={clearAll}>clrear all</button>
        </div>
            </section>
        </section> */}
        </>
    )
}

export default ToDoList
