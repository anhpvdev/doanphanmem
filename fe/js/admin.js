const user = localStorage.getItem("email")
const token =  localStorage.getItem("accessToken")
if(user){
    let username = user.split("@")[0]
    document.getElementById("user_show").innerHTML = "xin chào:" +username
}