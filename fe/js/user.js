const user = localStorage.getItem("email")

if(user){
    let username = user.split("@")[0]
    document.getElementById("user_show").innerHTML = "xin chào:" +username
}