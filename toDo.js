const todoList = [{
    name : 'make dinner',
    dueDate: '2022-12-22'},
{
    name : 'idly',
    dueDate: '2022-11-21'
}]; // Initialize an empty array to store the tasks

sendTodoList();
function sendTodoList() // helps to print todo list 
{
    let todoListHTML = '';
    for(let i = 0;i<todoList.length ; i++)
    {
        const todoObject = todoList[i];

        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        // const {name,dueDate} = todoObject; alternative way for above two lines
        todoListHTML += `<div>${name}</div>
        <div>${dueDate}</div>  
        <button
        onclick = "todoList.splice(${i},1) 
        sendTodoList();" class="delete-todo-button">
        Delete</button>`;
    }
    

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}
// inside the onclick attribute we are going to call addTodo() function
function addTodo()
{
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name,dueDate}); 
    

    inputElement.value = '';// "The text in the input box gets cleared."
    sendTodoList();

}