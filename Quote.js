//FIRST  we need Qoutes --> we cna get this by prvingd a dumb input or fecthwith an api 
// we can use math.random on those quest genreator to itreate random between the qutes 
// so we are jsut a fecth api here --> now fecth is just promise in desguiues 
// so let createa async and wait fucntion to call thi api wiht fecth and a dn then fucntionwill be able to handle the error

async function randomQutes(){
    const data="https://zenquotes.io/api/quotes"
    try{
const response=await fetch(data)
if(!response.ok){
    throw new Error(`Resposne status : ${response.status}` )
}
const result=await response.json()
// const ramdon =Math.random(console.log(result[1])) // the problem this radom thing i not working , let study how to use this

//what we learned how to user fecth async await and how to genreate random value 
const random=Math.floor(Math.random()*result.length)
const quote=result[random].q
const author=result[random].a 
if(author==null){
    a="Anonymous"
}
console.log(`"${quote}"`)
console.log(`--${author}`)
    }
    catch(error){
  console.log(" There is some error in the api",error)
    }
}
randomQutes();