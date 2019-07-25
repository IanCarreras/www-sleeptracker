const team = [
  { name: "Kasit", role: "Web Dev", img: "/img/kasit.jpg" },
  { name: "Ian", role: "Web Dev", img: "/img/ian.jpg" },
  { name: "Dennis", role: "Web Dev", img: "/img/dennis.jpg" },
  { name: "Melvin", role: "Front-end Dev", img: "/img/melvin.jpg" }
]

let aboutUs = document.querySelector("#about-us")

function teamMember(member){
  const div = document.createElement('div')
  div.innerHTML = `<img src=${member.img}/><h3>${member.name}</h3><h3>${member.role}</h3>`
}

team.forEach((member)=>{
  let newMember = teamMember(member)
  aboutUs.append(newMember)
})