import React,{useState} from 'react';




function ToDoList(){

    const [newTask, setNewTask]=useState('');
    const [Tasks, setTasks]=useState([]);

    const [newDate, setNewDate]=useState();
    const [date, setDate]=useState([]);


    // today's date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    } 
    
    today = yyyy + '-' + mm + '-' + dd;
    //

    function addTask(){
        if(newTask.trim()!=''){
            setTasks([...Tasks,newTask])
        }
        setDate([...date,newDate])
    }

    function  inputDate(event){

        let date_=new Date(event.target.value)
        let dd = date_.getDate();
        let mm = date_.getMonth() + 1;
        let yyyy = date_.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        } 
    
        date_ = dd + '/' + mm + '/' + yyyy;

        setNewDate(date_);

        // console.log(new Date(date_));
        
    }
    
    function inputTask(event){
        setNewTask(event.target.value);
    }
    
    function done(i){
        setTasks(Tasks.filter((item,ind)=>ind!=i))
        setDate(date.filter((item,ind)=>ind!=i))
    }
    
    return(
        <>
            <div className='inputDiv'>
                <h1 className='playwrite-is-title'>
                    To Do List
                </h1>
                <input 
                    type='text' 
                    placeholder="Add Task" 
                    className='inputBox' 
                    value={newTask}
                    onChange={inputTask} />

                <input type='date' onChange={inputDate} min={today} className='inputDate'></input>


                <button onClick={addTask} className='addButton'> Add </button>
            </div>




            <div className='displayDiv'>
                <ul>
                    {Tasks.map((task,index)=>
                    
                        <li className='listDisplay' key={index}> 
                        <div className='task'><span>  {task}  </span></div>
                            
                            
                                <div className='dueDate'>
                                    <span className='due'>Due:</span>
                                    <span className='date'>{date[index]}</span>
                                </div>
                                <button  onClick={()=>done(index)} className='taskDone'>Done</button>
                            
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
export default ToDoList;