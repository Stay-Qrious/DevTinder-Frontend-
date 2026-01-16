import axios from 'axios'
import { BaseURL } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';


const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);
    const fetchConnections = async () => {
        try {
           
            const res = await axios.get(BaseURL + "/user/connections", { withCredentials: true });   
            console.log(res.data.data);
            dispatch(addConnections(res.data.data));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);

 if(!connections) return ;
 if(connections.length === 0) {
    return (
        <div className="flex justify-center my-10"><h1 className=" text-bold text-2xl " >No Connections Found</h1></div>
      )
 }

return (
  <div className="flex flex-col items-center my-10">
    <h1 className="font-bold text-2xl mb-4">Connections</h1>

    {connections.map((connection) => (
      <div key={connection._id} className="my-1 border rounded-lg ">
        {connection.firstName } {connection.lastName} 
      </div>
    ))}
  </div>
);

}

export default Connections