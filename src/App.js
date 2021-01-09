import './App.scss';
import {useState} from 'react';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]);

    function handleTodoClick(todo) {
      console.log(todo);
      const index = todoList.findIndex(x => x.id === todo.id);
      if(index < 0) return;

      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValues){
      console.log('Form submit: ', formValues);
      const newTodoList = [...todoList];
      const newTodo = {
        id: todoList.length + 1,
        ...formValues,
      }
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
    }

  return (
    <div className="app">
      <h1>Welcome to React hooks</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
