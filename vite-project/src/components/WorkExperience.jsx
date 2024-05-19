import {useContext} from 'react'
import { ExperienceContext } from '../pages/Home'

export default function WorkExperience() {
    const experiences = useContext(ExperienceContext) // array

  return (
    <>
        <div>WorkExperience</div>

        <ul>
            {
                experiences.map(
                    (item, index) => {

                        return (
                            <li key={index}>
                                {/* {props.experiences.company_a.name} */}
                                {item.name}
                                <br />
                                <small>
                                    {/* {props.experiences.company_a.duration} */}
                                    {item.duration}
                                </small>
                            </li>
                        )

                    }
                )
            }
        </ul>
    </>
  )
}
