import {memo} from 'react'

export default memo(
    function List(props) {
        console.log('List render');
      return (
        <>

            <button 
                onClick={props.addTodo} 
                style={{ border: "1px solid green" }}
            >
                Add new todo
            </button>

            <ul>
                {
                    props.todos.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
      )
    }
)
