const projects = [
  {
    name: "Gerenciador comercial",
    desc: "Aplicação de gerenciamento de comércio genérico. Dashboards inclusos.",
    tecnologies:["Java","JavaSwing","MySQL"],
    github: "https://github.com/lazarobodevan/ProjetoFinalPOO"
  },
  {
    name: "Tweeter Bot",
    desc: "Tweeter bot que gera mensagem de bom dia com comentários do Youtube.",
    tecnologies:["Python","Pillow","Selenium","Tweepy"],
    github: "https://github.com/lazarobodevan/BomDiaBot"
  },
  {
    name: "Portfolio",
    desc: "Portfólio com o objetivo de apresentar minhas skills e meus projetos desenvolvidos ou em desenvolvimento.",
    tecnologies:["HTML","CSS","Javascript"],
    github: "https://github.com/lazarobodevan/lazarobodevan.github.io"
  },
  {
    name: "Jogo da memória",
    desc: "Jogo da memória como trabalho da disciplina de POO.",
    tecnologies:["Java","JavaFX"],
    github: "https://github.com/lazarobodevan/TP2-POO"
  },
  {
    name: "Aplicativo de Viagem",
    desc: "Aplicativo para planejamento de viagem e obtenção de informações sobre lugares para visitar.",
    tecnologies:["Flutter","Cubit"],
    github: "https://github.com/lazarobodevan/Travel-App"
  },
  {
    name: "API de Tarefas",
    desc: "API para aplicação de gerenciamento de tarefas.",
    tecnologies:["NodeJS","Express"],
    github: "https://github.com/lazarobodevan/Tarefas-API"
  },
  {
    name: "Tarefas - Frontend",
    desc: "Aplicação frontend que consome a API previamente desenvolvida.",
    tecnologies:["ReactJS","Vite"],
    github: "https://github.com/lazarobodevan/Tarefas-FrontEnd"
  },
  {
    name: "Mabills",
    desc: "Aplicação para gerenciamento de contas e transações em geral.",
    tecnologies:["Angular","NodeJS","Express","MongoDB","Jest","Supertest","Cypress"],
    github: "https://github.com/lazarobodevan/Mabills"
  },
  {
    name: "Cookbook",
    desc: "Rede social de receitas.",
    tecnologies:["ReactJS","PostgreSQL","Docker","NodeJS","NestJS","TypeORM","Typescript"],
    github: "https://github.com/lazarobodevan/cookbook"
  },
]

window.onscroll = function() {scrollFunction()};

document.getElementById("projs").innerHTML = projects.map(proj =>{
  return `<div class="proj">
            <div class="proj-wrapper">
                <div class="proj-txt">
                    <span class="proj-name">${proj.name}</span>
                    <p>${proj.desc}</p>
                </div>
                <div class="proj-technologies">
                ${
                  proj.tecnologies.map(tech =>{
                    return `<div class="proj-technology">
                              <p>${tech}</p>
                            </div>`
                    
                  }).join('')
                }
                </div>
                <div class="proj-btn">
                    <a href="${proj.github}" target="_blank"><img class="icon" src="./images/github.svg"/></a>
                </div>
            </div>
            
          </div>`
})

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.backgroundImage = "linear-gradient(#071931, #0D0118)";
    document.getElementById("header").style.transition = "all 0.7s ease";
  } else {
    document.getElementById("header").style.height = "120px";
    document.getElementById("header").style.backgroundImage = "none";
  }
}