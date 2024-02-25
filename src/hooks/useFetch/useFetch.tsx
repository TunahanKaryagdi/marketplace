import axios, { AxiosResponse } from "axios";
import { useEffect , useState} from "react"



const useFetch = (url: string) : [BaseResponse | null, boolean, Error | null]=>{

    const [error,setError] = useState<Error | null>(null);
    const [data, setData] = useState<BaseResponse | null>(null);
    const [loading,setLoading] = useState(false);

   useEffect(()=>{
     fetchData();
   },[]) ;


   const fetchData = async () =>{
        try {
            setLoading(true);
            const response: AxiosResponse<BaseResponse>  = await axios.get(url);
            setData(response.data);
            
        } catch (error) {

        }finally{
            setLoading(false);
        }
   }
   return [data,loading,error];
}

export default useFetch;