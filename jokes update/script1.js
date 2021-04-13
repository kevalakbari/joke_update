

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const newjoke = async () => {

try{

    const setHeader ={
        headers: {
            Accept : 'Application/json'
            
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',setHeader)
    const data = await res.json()
    jokes.innerHTML = data.joke;


}catch(err){
    console.log(`the error is ${err}`)
}

}
   

jokebtn.addEventListener('click',newjoke)
newjoke();