
import trello from './videos/Trello.mp4'
import mabills from './videos/Mabills.mp4'
import cookbook from './videos/CookBook.mp4'
import greencart from './videos/GreenCart.mp4'
import billy from './videos/Billy.mp4'
import planty from './videos/Planty.mp4'

export const projects = [
    {
        "id": 1,
        "name": "Trello simplificado 📝",
        "briefing": "Uma versão simplificada do Trello. É possível criar cards de tarefas e movê-los entre painéis de acordo com o seu status.",
        "description": "Este foi o primeiro projeto fullstack que construí, um clássico projeto To-Do. Conta com 3 painéis ('A fazer', 'Fazendo', 'Concluído') e os cartões com as tarefas podem ser movimentados entre esses. Cada cartão contém seu nome, uma descrição e o seu status. Nele, exercitei os conhecimentos adquiridos na disciplina de Sistemas Distribuídos, em como enviar, receber e tratar informações enviadas através da rede.",
        "status": "Concluído",
        "technologies":["HTML", "CSS", "Javascript", "ReactJs", "NodeJs", "ExpressJs", "MySQL"],
        "date": "19/02/2023",
        "video": trello,
        "github": "https://github.com/lazarobodevan/Tarefas-FrontEnd",
        "linkedin":"https://www.linkedin.com/posts/lazaro-bodevan_reactjs-frontend-activity-7031014493895733248-bS2C?utm_source=share&utm_medium=member_desktop"
    },
    {
        "id": 2,
        "name": "Mabills 💵",
        "briefing": "Aplicação Web para gerenciamento de contas pessoais (entradas e gastos). Inclui dashboards.",
        "description": "Aplicação web com o objetivo de gerenciar contas pessoais através do registro de receitas e gastos. Cada transação financeira é relacionada a uma categoria (receita ou gasto), além de uma categoria criada pelo usuário, como Educação, Saúde, Supermercado, ou o que mais for útil para o usuário. Este foi o primeiro projeto maior que eu fiz, então o código (especialmente do backend) não está da forma como escrevo hoje com mais conhecimento, mas adicionei ao portfolio porque faz parte do meu aprendizado.",
        "status": "Concluído",
        "technologies": ["HTML", "CSS", "NodeJs", "Javascript", "MongoDB", "Mongoose", "ExpressJs", "Angular", "Cypress", "Jest"],
        "date": "08/05/2023",
        "video": mabills,
        "github": "https://github.com/lazarobodevan/Mabills",
        "linkedin": "https://www.linkedin.com/posts/lazaro-bodevan_angular-fullstack-nodejs-activity-7061179180306112512-mekx?utm_source=share&utm_medium=member_desktop"
    },
    {
        "id": 3,
        "name": "Cookbook 👨🏻‍🍳",
        "briefing": "Rede social de receitas, onde é possível postar, curtir, comentar e buscar receitas, além de seguir outras pessoas.",
        "description": "Este projeto foi destinado a um teste prático para uma vaga de desenvolvedor fullstack junior. Foi o segundo projeto maior que desenvolvi. O código, na minha opinião, não está de todo mal mas é engessado devido ao não uso de injeção de dependência. Desenvolvi todas as funcionalidades core do projeto: cadastrar, curtir, comentar e buscar receitas; e deixei encaminhado outras funcionalidades como seguir pessoas e visualizar o perfil delas.",
        "status": "Concluído",
        "technologies": ["HTML", "CSS", "NestJs", "Typescript", "Javascript", "MongoDB", "Mongoose", "ReactJs"],
        "date": "29/07/2023",
        "video": cookbook,
        "github":"https://github.com/lazarobodevan/cookbook",
        "linkedin": "https://www.linkedin.com/posts/lazaro-bodevan_opentowork-junior-developer-activity-7095559776419377152-E-kA?utm_source=share&utm_medium=member_desktop"
    },
    {
        "id": 4,
        "name": "GreenCart 🛍️",
        "briefing": "Um aplicativo que conecta produtores rurais locais com consumidores finais, em uma espécie de feira online.",
        "description": "Este projeto é uma ideia que tive ao cursar a disciplina de Engenharia de Software I. Este aplicativo tem por objetivo fomentar a economia local através do aumeto da visibilidade dos produtores rurais locais, em uma espécie de feira online. Há cadastro de produtores e clientes, e a cada cliente, por padrão, são mostrados os produtos de produtores em um raio de 2km. Além disso, é possível buscar produtores, buscar produtos, filtrar por distância, preço e avaliação. Esse código é o mais robusto que construí até hoje e conta com testes de unidade e testes de integração, além de injeção de dependência o que fez com que o sistema tivesse alta coesão e baixo acoplamento.",
        "status": "Em desenvolvimento",
        "technologies":["Flutter", "Bloc", "ASP.NET Core", "xUnit", "Moq", "Docker", "PostgreSQL/PostGis", "EF Core"],
        "date":"21/03/2024",
        "video": greencart,
        "github": "https://github.com/lazarobodevan/Fairy",
        "linkedin": "https://www.linkedin.com/posts/lazaro-bodevan_opentowork-junior-developer-activity-7157675398619639808-V4ut?utm_source=share&utm_medium=member_desktop"
    },
    {
        "id": 5,
        "name": "Billy 💸",
        "briefing": "Um aplicativo de controle de finanças pessoais, com gráficos, categorização e subcategorização de transações, backup com google drive.",
        "description": "Este projeto surgiu de uma dor pessoal, em que os aplicativos de finanças ja existentes não me atendiam. Nisso, pensando em substituir uma planilha antiga e trazendo a solução para a palma da minha mão, desenvolvi o Billy. Nesse aplicativo, é possível cadastrar despesas, receitas, controlar faturas com datas variáveis, definição de metas de gastos, e backup com google drive. Nesse projeto, exercitei as boas práticas de programação, me desafiei a nível tecnológico e de design de interfaces.",
        "status": "Concluído",
        "technologies":["Flutter", "Bloc", "fl_charts", "SQFlite", "Firebase", "Google API"],
        "date":"05/02/2025",
        "video": greencart,
        "github": "https://github.com/lazarobodevan/billy",
        "linkedin": "https://www.linkedin.com/posts/lazaro-bodevan_developer-junior-mobile-activity-7269518867851345920-dbE_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACZti4QBD8HKedTmfhM7Bgbp99E4vSt8kxw"
    },
    {
        "id": 6,
        "name": "Planty 🪴",
        "briefing": "Um aplicativo de monitoramento temperatura, luminosidade e umidade do solo para plantas.",
        "description": "Este projeto tem por objetivo resolver uma dor pessoal. Sempre gostei de plantas, mas toda a vida tive dificuldade em cultivá-las porque sempre morriam ou cresciam de forma irregular. Sendo assim, construí uma aplicação mobile, um servidor backend e uma placa de circuito com uns sensores para desempenharem essa função. A cada 5 minutos, são salvos os dados da leitura atual em memória, e a cada 1h é feita uma média desses valores e persistido no banco de dados.",
        "status": "Concluído",
        "technologies":["Flutter", "Bloc", "fl_charts", "ASP.NET", "C++", "Arduíno", "Docker", "PostgreSQL"],
        "date":"04/02/2025",
        "video": planty,
        "github": "https://github.com/lazarobodevan/planty",
        "linkedin": "https://www.linkedin.com/posts/lazaro-bodevan_opentowork-junior-dev-activity-7292379157575921666-f8TH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACZti4QBD8HKedTmfhM7Bgbp99E4vSt8kxw"
    },
    {
        "id": 7,
        "name": "Parlador Ideal 🗣️",
        "briefing": "Um aplicativo facilitador de troca de idéias.",
        "description": "Este projeto foi construído como um desafio técnico para uma vaga de desenvolvedor fullstack junior. As funcionalidades requisitadas foram cadastro e login de usuários, publicar, editar, excluir e listar com paginação as postagens no app.",
        "status": "Concluído",
        "technologies":["React Native", "NodeJs", "PostgreSQL", "Express", "Docker", "Jest", "Typescript"],
        "date":"16/04/2024",
        "video": null,
        "github": "https://github.com/lazarobodevan/teste-codificar",
        "linkedin": null
    }
]