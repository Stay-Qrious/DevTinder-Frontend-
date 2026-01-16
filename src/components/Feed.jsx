import React, { use, useEffect } from 'react'
import { BaseURL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setFeed } from '../utils/feedSlice'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if(feed) return;
    try {
      const res = await axios.get(BaseURL + "/feed", { withCredentials: true });
      dispatch(setFeed(res.data));
    }
    catch (e) {
      console.log(e.message);
    }

  }

  useEffect(() => {
    getFeed();
  }, [])


  return (
    feed && (<div className="flex justify-center my-10" >
      <UserCard user={feed[0]} />
    </div>)
  )
}

export default Feed