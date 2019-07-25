const team = [
  { name: "Kasit", role: "Web Dev", img: "/img/kasit.png" },
  { name: "Ian", role: "Web Dev", img: "/img/ian.png" },
  { name: "Dennis", role: "Web Dev", img: "/img/dennis.png" },
  { name: "Melvin", role: "Front-end Dev", img: "/img/melvin.png" }
]

let aboutUs = document.getElementById("about-us")

function teamMember(member) {
  const div = document.createElement("div")
  const memberDetails = `
  <img src="${member.img}"/>
  <h3>${member.name}</h3>
  <h3>${member.role}</h3>
  `
  div.innerHTML = memberDetails
  return div
}

team.forEach((member) => {
  let newMember = teamMember(member)
  aboutUs.appendChild(newMember)
})
