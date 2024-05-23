const user = localStorage.getItem("email")
const token =  localStorage.getItem("accessToken")
const user_id = localStorage.getItem("id")
if(user){
    let username = user.split("@")[0]
    document.getElementById("user_show").innerHTML = "xin chào:" +username
}