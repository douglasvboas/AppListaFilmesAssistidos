Minha Lista de Filmes GitHub GitHub last commit GitHub repo size

Minha Lista de Filmes é um aplicativo mobile desenvolvido para gerenciar uma lista de filmes. Com ele, você pode cadastrar filmes, visualizar detalhes como gênero, classificação e status de "assistido", além de acessar o trailer de cada filme diretamente no YouTube.

O projeto foi desenvolvido usando Ionic 7 com Angular (standalone components) e PHP/PDO para o backend. É uma aplicação simples, mas poderosa, para quem ama cinema e quer organizar sua lista de filmes favoritos.

Funcionalidades Cadastro de Filmes: Adicione filmes com nome, descrição, gênero, classificação e status de "assistido".

Listagem de Filmes: Veja todos os filmes cadastrados em uma lista organizada.

Detalhes do Filme: Visualize o gênero, classificação e se o filme já foi assistido.

Trailer dos Filmes: Acesse o trailer do filme diretamente no YouTube.

Menu de Navegação: Navegue facilmente entre a lista de filmes e a tela de cadastro.

Tecnologias Utilizadas Frontend:

Ionic 7

Angular (standalone components)

TypeScript

HTML5 e SCSS

Backend:

PHP

PDO (PHP Data Objects) para conexão com o banco de dados

MySQL

Ferramentas:

Node.js e npm

Git e GitHub

XAMPP (para servidor local)

Pré-requisitos Antes de começar, você precisará ter instalado em sua máquina:

Node.js (v18 ou superior)

Ionic CLI (v7 ou superior)

Angular CLI (v16 ou superior)

PHP (v8.0 ou superior)

MySQL (ou MariaDB)

XAMPP (opcional, para servidor local)

Como Executar o Projeto Siga os passos abaixo para configurar e executar o projeto em sua máquina.

Clone o Repositório bash Copy git clone https://github.com/seu-usuario/minha-lista-filmes.git cd minha-lista-filmes
Configure o Backend Crie um banco de dados chamado filmes no MySQL.
Importe a tabela filmes usando o seguinte comando SQL:

sql Copy CREATE TABLE filmes ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL, descricao TEXT, genero ENUM('ação', 'drama', 'suspense', 'terror', 'romantico', 'outro') NOT NULL, classificacao DECIMAL(3,1), assistido ENUM('sim', 'não') NOT NULL, trailer VARCHAR(255) ); Coloque o arquivo api.php na pasta do seu servidor PHP (por exemplo, htdocs no XAMPP).

Configure o Frontend Instale as dependências do projeto:
bash Copy npm install Configure a URL da API no serviço FilmeService:

Abra o arquivo src/app/services/filme.service.ts e atualize a variável apiUrl com o endereço do seu servidor PHP.

typescript Copy private apiUrl = 'http://localhost/caminho-para-api/api.php'; Execute o projeto:

bash Copy ionic serve Isso abrirá o aplicativo no navegador.

Estrutura do Projeto Copy minha-lista-filmes/ ├── src/ │ ├── app/ │ │ ├── pages/ │ │ │ ├── home/ # Página inicial com a lista de filmes │ │ │ └── filme-cadastro/ # Página de cadastro de filmes │ │ ├── services/ │ │ │ └── filme.service.ts # Serviço para consumir a API │ │ └── app.routes.ts # Configuração das rotas │ ├── assets/ # Arquivos estáticos (imagens, ícones) │ └── theme/ # Estilos globais ├── api/ # Backend PHP │ └── api.php # Arquivo da API ├── README.md # Documentação do projeto └── ionic.config.json # Configuração do Ionic Como Contribuir Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

Licença Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

Nome: dvbtecnology

E-mail: contato@dvbtecnology.com

GitHub: douglasvboas

Agradecimentos Equipe do Ionic Framework por fornecer uma ferramenta incrível para desenvolvimento mobile.

Comunidade do Angular pelo suporte e documentação detalhada.

Todos os colaboradores e usuários que ajudaram a testar e melhorar este projeto.

Divirta-se organizando sua lista de filmes! 🎬🍿

Esse texto é um template completo para o seu README.md. Você pode personalizá-lo conforme necessário, adicionando mais detalhes sobre o projeto, screenshots, ou links para demonstrações. 
