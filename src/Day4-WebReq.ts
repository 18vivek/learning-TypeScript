import axios, {type AxiosResponse} from "axios"

interface toDo {
    userId : number;
    id:number;
    title:string;
    completed:boolean;
}

const fetchData = async()=>{
    try {
        const response :AxiosResponse<toDo>=await axios.
        get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.config);
        
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error ", error.message);
            if(error.response){
                console.log(error.response.status);
                
            }
        }
        
    }
}

axios.get('https://example.com/data')
.then(response=>{
    console.log(response.data);
    
})