const BASEURL='https://coetus.herokuapp.com'
const API='/api/forum'
const USERS='/users'
const TOPICS='/topics'
const MESSAGE='/message'
const TOPICS_ID='/:topic_id'

function register(user){
    return fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}

function login(user){
    let res = fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}
function getAllDisc(){
    return fetch(`${BASEURL}${API}${TOPICS}`)
    .then(res => res.json())
}

function getDiscMsg(TOPICS_ID){
    return fetch(`${BASEURL}${API}${MESSAGE}${TOPICS_ID}`)
    .then(res => res.json())
}

export {
    register,
    login,
    getAllDisc,
    getDiscMsg
}