export default function WorkExperience(props) {
  return (
    <>
        <div>WorkExperience</div>

        <ul>
            <li>
                {props.experiences.company_a.name}
                <br />
                <small>
                    {props.experiences.company_a.duration}
                </small>
            </li>

            <li>
                {props.experiences.company_b.name}
                <br />
                <small>
                    {props.experiences.company_b.duration}
                </small>
            </li>
        </ul>
    </>
  )
}
