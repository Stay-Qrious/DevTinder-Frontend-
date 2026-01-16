import { BaseURL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BaseURL + "/user/requests/received", { withCredentials: true });
            console.log(res.data.data);
            dispatch(addRequests(res.data.data));
        } catch (error) {
            console.error("Error fetching requests:", error);
        }  
    }

    useEffect(() => {
        fetchRequests();
    }, []);

    if(!requests) return ;
    if(requests.length === 0) {
        return (
            <div className="flex justify-center my-10"><h1 className=" text-bold text-2xl " >No Requests Found</h1></div>
          )
     }

  return (
      <div className="flex flex-col items-center my-10">
    <h1 className="font-bold text-2xl mb-4">Requests</h1>

    {requests.map((request) => (
      <div key={request._id} className="my-1 border rounded-lg ">
        {request.firstName } {request.lastName} 
      </div>
    ))}
  </div>
  )
}

export default Requests