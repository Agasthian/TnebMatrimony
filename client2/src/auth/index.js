//Holds the auth logic - using local storage -then imported into their components - ryan

//imported into src> pages> signup>
export const signup = user => {
    return fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

//to reduce code complex - fetch is writtern in seperate method and called inside handle submit
//imported into src> pages> signin>
export const signin = user => {
    return fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(response =>{
        return response.json()
        })
        .catch(err => console.log(err))
    }

//Authenticate  //imported into src> pages> signin>
// 'data' is passed as prop - shown here as jwt -acan also be called data
// next - is a callback for set state redirect is taken in as next prop
export const authenticate = (jwt, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem('jwt', JSON.stringify(jwt))
        next()
    }
  } 


  // Sign out  //imported into src> components> header>
export const signout = (next) => {

    if(typeof window !== "undefined") localStorage.removeItem('jwt')
    next()
  
    return fetch('http://localhost:5000/signout', {
        method: "GET"
    })
    .then(response => {
        console.log('signout :>> ', response);
        return response.json()
    })
    .catch(err => console.log(err))
  
  }
  
  //is Authenticated method to find is the userr is signed in or out using local storage
  export const isAuthenticated = () => {
     
    if(typeof window == 'undefined'){
        return false
    }
  
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
  }