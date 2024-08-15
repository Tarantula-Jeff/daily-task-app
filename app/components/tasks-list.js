import { TaskItem } from "./task"

export default function Tasklist(){

    //An array of tasks
const tasks=[
    "Learn React and more",
    "Learn React and more",
    "Learn React and more",
    "Learn React and more",
    "Learn React and more",
    "Learn React and more"

]


    return<>
<ul className="">

    
    {
        //Loop through the array and render each task as a list item
        //using .map function of the array data structures in js
        tasks.map((task,index)=>{
            //return<li key={index}>{task}</li>

            return <TaskItem title={task} key={index}></TaskItem>
            
        })
    }
    
    </ul>

    </>
}