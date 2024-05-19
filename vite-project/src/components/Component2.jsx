import {useContext, useReducer} from 'react'
import {Component3} from './Contact'

const defaultValues = [
    {
        id: 1,
        name: 'Danniel Libor',
        timedIn: false
    },
    {
        id: 2,
        name: 'John Doe',
        timedIn: false
    }
]
 // dispatch({ id: 1, timedIn: true })
const checkFunction = function (values, action) {
    return values.map((value) => {
        if(value.id === action.id) {
            return {...value, ...action }
        } else {
            return value
        }
    })
}

export default function Component2() {
    const form = useContext(Component3)
    console.log(form);

    const [attendances, dispatch] = useReducer(checkFunction, defaultValues)

    function timeIn(){
        dispatch({ id: 1, timedIn: true })
    }

  return (
    <div>
        <button onClick={timeIn} style={{ border: "1px solid red" }}>Time In</button>

        <ul>
            {
                attendances.map((item, index) => {
                    return (
                        <div key={index}>
                            <li>
                                <p>{item.name}</p>
                                <p>{item.timedIn ? "True" : "False"}</p>
                            </li>

                            <br/>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
}
