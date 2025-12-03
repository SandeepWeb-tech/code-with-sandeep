
async function TakeTime(){
    await new Promise((resolve, reject) => {
        setTimeout(reject, 3000)
    })
}

export default async function About() {
    await TakeTime();
    return(
        <>I am a About page</>
    )
}

