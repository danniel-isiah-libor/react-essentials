import {useState, useCallback, useMemo} from 'react';
import List from '../components/List'

export default function Todos() {
    const [num, setNum] = useState(0)
    const [todos, setTodos] = useState([])

    const getGrades = useMemo(() => computeGrades(), [num])

    function computeGrades(){
        console.log('Computing Grades...')

        let grades = 0

        for(let a = 0; a < 100000000; a++) {
            grades++
        }

        return grades
    }

    function clickEvent(){
        setNum(num + 1)
    }

    const addTodo = useCallback(() => {
        setTodos([
            ...todos,
            'New Task'
        ])
    }, [todos])

  return (
    <>
        <div>Todo List</div>

        <button 
            onClick={clickEvent} 
            style={{ border: "1px solid red" }}
        >
            Click Me
        </button>

        <p>Your Grade is: {getGrades}</p>

        <List todos={todos} addTodo={addTodo}/>
    </>
  )
}
