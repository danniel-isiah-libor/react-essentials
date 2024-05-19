import Profile from '../components/Profile'
import {useReducer, useEffect, createContext} from 'react'

const ExperienceContext = createContext()

export {ExperienceContext}

 const experiences = [
  {
    id: 1,
    name: 'Company A',
    duration: '2019 - 2021'
  },
  {
    id: 2,
    name: 'Inventive Media',
    duration: '2021 - present'
  }
 ]

 /**
  * This is a function to add new item inside array
  * 
  * @param {*} state
  * @param {*} action
  * @return array
  */
 const handleAddExperience = (state, action) => {
  /**
   * name: google
   * duration:
   */
  const newWork = action
  const newArray = [...state]

  const lastItem = state[state.length - 1]

  newWork.id = lastItem.id + 1
  /**
   * name: google
   * duration:
   * id:
   */

  newArray.push(newWork)

  return newArray
 }

 const applications = []

export default function Home() {
  const [workExperiences, handleDispatch] = useReducer(handleAddExperience, experiences)

  useEffect(() => {
    console.log(workExperiences);
  }, [workExperiences])
  
  function addExperience(){
    handleDispatch({
      name: 'Google',
      duration: '2010-2015'
    })
  }

  return (
    <ExperienceContext.Provider value={workExperiences}>
      <div>
            <button
            onClick={() => handleDispatch({
              name: 'Google',
              duration: '2010-2015'
            })}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Add Experience
            </button>

            <Profile 
            name="John Doe" 
            position="Software Engineer"
            />

          {
            (applications.length > 0) && <>
            <h2>Applications</h2>
            <ul>
              {
                (applications.length) ?
                applications.map(
                  (item, index) => {
                    return <li key={index}>{item}</li> 
                  }
                )
                : <li>No applications</li>
              }
            </ul>
            </>
          }
      </div>
    </ExperienceContext.Provider>
  )
}
