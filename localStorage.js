
 function LS(){

}

export default LS;

LS.prototype.fetchTask = function(){

    let task = localStorage.getItem("task");

    if(task)
    {
     task = JSON.parse(task);
    }

    else{
        task = [];
        }

  return task;
}

LS.prototype.storeTask = function(task){
    let tasks = this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem("task",JSON.stringify(tasks));


}

LS.prototype.deleteTask = function(id){
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task)=>task.id===id);
    
    tasks.splice(index,1);
    localStorage.setItem("task",JSON.stringify(tasks));


} 


LS.prototype.completeTask = function(id){
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task)=>task.id===id);

    if(tasks[index].isComplete){
        tasks[index].isComplete = false;
    }

    else{
        tasks[index].isComplete = true;  
    }
    localStorage.setItem("task",JSON.stringify(tasks));
}
