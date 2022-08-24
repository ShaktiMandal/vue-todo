import { defineStore } from "pinia";

const initialState = () => ({
        taskList: []
 });

function filterData(id) {
    debugger;
    let isTaskPresent = this.taskList.findIndex( (task) => task.id === id) !== -1;
    if(isTaskPresent)
    {
        this.taskList = this.taskList.filter( (task) => task.id !== id);
    }
}

function myOwnFetch() {
        debugger;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                    name: 'test1',
                    age: 10
                },
                {    
                    name: 'test2',
                    age: 30
                },
                {
                    name: 'test3',
                    age: 40
                }
                ])
            }, 100)
            
        });
}

function setUsers(users){
    debugger;
    users.forEach( (user, index) => {
        this.taskList.push({
            id: index,
            taskDescription: user.name
        });
    })
}


export const useToDoStore = defineStore('todolist', {

    state: initialState,

    getters: {
        todoList: (state) => state.taskList
    },
    actions: {
        addTask(task){
            this.taskList.push(task);
        },
        deleteTask(id){
            console.log(this);
            filterData.call(this,id);
        },
        async retriveData(){
            debugger;
            const response = await myOwnFetch();
            setUsers.call(this, response);
        }
    }
});
