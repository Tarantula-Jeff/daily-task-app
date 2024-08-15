"use client"

import {Tasklist} from "./components/tasks-list"


export default function page(){
  return <>
  <h1 className="text-4xl font-bold text-white">Daily task App</h1> 
  <p> Welcome to Daily task</p>

 <button onClick={(e)=>{
                        prompt("Add your task")
                    }}className="absolute bottom-10 right-10 bg-slate-200 rounded-full hover:bg-fuchsia-300 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      </button>
  
    <Tasklist/>
    </>
}