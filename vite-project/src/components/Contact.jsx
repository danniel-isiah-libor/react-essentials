export default function Contact() {
    function handle(event) {
        event.preventDefault()
        alert('Submitted')
    }

    function onChange(event) {
        console.log(event.target.value)
    }

    return (
        <>
            <form onSubmit={handle}>
                <label>Email:</label>
                <input type="email" onChange={onChange}/>

                <br />

                <label>Message:</label>
                <textarea onChange={onChange}></textarea>

                <br />
                
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}