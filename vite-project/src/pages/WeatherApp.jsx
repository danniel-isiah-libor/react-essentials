export default function WeatherApp() {

    async function process1(){
        console.log('Process 1 is running...');

        let result = 0

        for(let a = 0; a < 100000000; a++) {
            result++
        }

        return result
    }

    async function process2(){
        // throw 'error'

        console.log('Process 2 is running...');

        let result = 0

        for(let a = 0; a < 100000000; a++) {
            result++
        }

        return result
    }

    async function onClick(){
        console.log('Loading.....');
        console.log('Process start here...');

        await Promise.all([
            process1(),
            process2()
        ])
        .then(() => {
            console.log('All process are completed');
        })
        .catch(() => {
            console.log('error found');
        })
        .finally(() => {
            console.log('Loading stops here....');
        })

        console.log('Process stop here...');
    }

  return (
    <>
        <div>WeatherApp</div>
        <button onClick={onClick} style={{ border: "1px solid red" }}> Execute all process </button>
    </>
  )
}
