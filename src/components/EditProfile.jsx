import {  useState } from "react";
import { setUser } from "../utils/userSlice"
import UserCard from './UserCard'
import { useDispatch } from "react-redux";
import axios from "axios";
import { BaseURL } from "../utils/constants";


const EditProfile = ({user}) => {
    
 const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

      const saveProfile = async() => {
        try {
            const res = await axios.patch(BaseURL + "/profile/edit", {
                firstName,
                lastName,
                age,
                about,
                photoUrl
            }, { withCredentials: true });
            console.log(res.data);  
            dispatch(setUser(res.data.data));
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            setError(null);

            
        } catch (e) {
            console.log(e);
            setError(e.response?.data);
        }
  }
  

  return (




    <div className="flex justify-center">

    
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Edit Profile</h2>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">First Name</legend>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Last Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Age</legend>
            <input
              type="text"
              className="input"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>



          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">About</legend>
            <input
              type="text"
              className="input"
              placeholder="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">ProfileURL</legend>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </fieldset>


          <div className="card-actions justify-end">
            <button onClick={saveProfile} className="btn btn-primary" >
              Save Profile
            </button>
          </div>
          <div className="text-red-500" >{error}</div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center h-screen mx-10">
        <UserCard user={{firstName, lastName, age, about, photoUrl}} />
    </div>

    <div className="toast toast-top toast-center">
  {showToast && <div className="alert alert-info">
    <span>Profile Saved Successfully</span>
  </div>}
</div>

    </div>
  );
}

export default EditProfile