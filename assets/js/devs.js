function loadDevs(id){$.get("/getUser/"+id,(data,status)=>{let d=document.createElement("div")
d.classList.add("dev")
let di=document.createElement("img")
di.src="https://cdn.discordapp.com/avatars/"+data.id+"/"+data.avatar+".png"
di.classList.add("devimg")
let dt=document.createElement("p")
dt.innerText=data.username+"#"+data.discriminator
dt.classList.add("devname")
d.appendChild(di)
d.appendChild(dt)
document.querySelector(".devs").appendChild(d)})}