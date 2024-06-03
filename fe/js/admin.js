const admin = localStorage.getItem("ad_email")
const ad_token =  localStorage.getItem("ad_accessToken")
if(admin){
    let adminname = admin.split("@")[0]
    document.getElementById("user_show").innerHTML = "xin chào:" +adminname
}
