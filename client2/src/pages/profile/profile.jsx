import React,{useState,useEffect} from 'react'
import {Helmet} from 'react-helmet'
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

import {isAuthenticated} from '../../auth'
import DefaultProfile from '../../assets/defaultUser.png';

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'
import DeleteUser from '../../components/deleteUser/DeleteUser'

const Profile = () => {
  //State
  const [profile,setProfile] = useState([])
  const [redirectToSignIn, setRedirectToSignin] = useState(false)

    // console.log(useParams().userId);
    const {userId} = useParams() //use params gets the parameter from url - eg:user id

    const url =`${process.env.REACT_APP_API_URL}/user/${userId}`

    const fetchData = async () =>{
        try {
            const response = await axios(url,{
                headers: {
                    authorization: `Bearer ${isAuthenticated().token}`,
                  },            
                })
            console.log('response',response.data)
              setProfile(response.data)
        } catch (error) {
            console.log(error.response)
             setRedirectToSignin(true)
        }
    }

    useEffect( ()=>{
      //console.log('userId', userId)
      fetchData()
     },[userId])
 
     //If  redirecttosign in state is true we naviagte to this route.
   if(redirectToSignIn) return <Navigate to='/signin' />

  return (
    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Profile'/>
      <br/>
      <br/>
      <div className='ui container'>       
        <h2 className="ui header">Profile Info</h2>
        <div className="ui divider"></div>
        <div className="ui grid">
            <div className="six wide column">
                <p>Hello {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>{`Joined ${new Date(profile.created).toDateString()}`}</p>
                <p>{profile._id}</p>

            </div>
            <div className="four wide column">
                <div className="image">
                  <img src={DefaultProfile}/>
                </div>
                {isAuthenticated().user && isAuthenticated().user._id === profile._id &&(
                    <>
                      <Link to={`/user/edit/${profile._id}`}>
                        <button class="ui blue button">
                        <i class="edit icon"></i>
                            Edit Profile
                        </button>
                      </Link>

                      <DeleteUser userId={profile._id}/>
                    </>
                )}
            </div>
        </div>
    </div>
    <br/><br/>
    </Layout>
  )
}

export default Profile