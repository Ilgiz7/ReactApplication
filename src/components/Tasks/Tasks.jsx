import React from "react";

const Tasks = (props)=>{

    let onChangeTaskName = (e)=>{
        let currentTaskName = e.target.value

        return props.updateTaskName(currentTaskName)
     }

    let onChangeTaskDescription = (e)=>{
        let currentTaskDescription = e.target.value

        return props.updateTaskDescription(currentTaskDescription)
    }

    let addTask = ()=>{
          return props.addTask()
    }



    let tasksMassive = props.tasksPage.tasks.map((t)=>{

        return ( <tr><td>{t.name}</td><td>{t.content}</td></tr>)

     })


    return (<div>
        <div>
            <textarea value={props.tasksPage.taskName} onChange={onChangeTaskName}> </textarea>
        </div>
        <div>
            <textarea value={props.tasksPage.taskDescription} onChange={onChangeTaskDescription}> </textarea>
        </div>
        <div>
            <button onClick={addTask}> Add Task</button>
        </div>



        <table border="1">
            <caption>Задачи на заметку</caption>
            <tr>
                <th>Название</th>
                <th>Содержание</th>
            </tr>
            {tasksMassive}

        </table>


            </div>)


 }


 export default Tasks