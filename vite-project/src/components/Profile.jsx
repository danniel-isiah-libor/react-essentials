import WorkExperience from './WorkExperience'

function Profile(props) {
    const css = { 
        color: 'red', 
        backgroundColor: 'lightblue'
    }

    return (
        <>
        <h1 style={css}>
        My Profile Details
        </h1>

        <p>
        Name: {props.name}
        </p>

        <p>
        Position: {props.position}
        </p>

        <p>
        Company: Google
        </p>

        <WorkExperience experiences={props.experiences}/>
        </>
    )
}

export default Profile