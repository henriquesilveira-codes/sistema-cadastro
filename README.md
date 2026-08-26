# Sistema de Cadastro de Alunos e Cursos (API REST)

Uma API RESTful robusta desenvolvida para gerenciar o cadastro de alunos, cursos e matrículas. Este projeto foi construído aplicando boas práticas de Engenharia de Software, utilizando relacionamentos de banco de dados e regras de negócio.

## Tecnologias Utilizadas
* **Framework:** NestJS (TypeScript)
* **ORM:** Prisma
* **Banco de Dados:** PostgreSQL
* **Infraestrutura:** Docker & Docker Compose
* **Documentação:** Swagger (OpenAPI)

## Como configurar o Banco de Dados
O projeto utiliza o Docker para rodar o PostgreSQL de forma isolada. 
Certifique-se de ter o [Docker](https://www.docker.com/) instalado e rodando em sua máquina.

1. Na raiz do projeto, suba o contêiner do banco de dados:
   ```bash
   docker-compose up -d
   ```
2. O banco de dados estará rodando na porta `5432`.

## Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/henriquesilveira-codes/sistema-cadastro.git](https://github.com/henriquesilveira-codes/sistema-cadastro.git)
   ```
2. Acesse a pasta do projeto e instale as dependências:
   ```bash
   cd sistema-cadastro
   npm install
   ```
3. Configure o arquivo `.env` na raiz do projeto com a URL do banco:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cadastro_db?schema=public"
   ```
4. Execute as migrações do Prisma para criar as tabelas no banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```
   
## Lista dos Endpoints Disponíveis
A documentação interativa e completa da API pode ser acessada via Swagger rodando o projeto e acessando: `http://localhost:3000/api/docs`.

### Alunos
* `POST /alunos` - Cria um novo aluno.
* `GET /alunos` - Lista todos os alunos.
* `GET /alunos/:id` - Busca um aluno específico.
* `PATCH /alunos/:id` - Atualiza os dados do aluno.
* `DELETE /alunos/:id` - Deleta um aluno.

### Cursos
* `POST /cursos` - Cria um novo curso.
* `GET /cursos` - Lista todos os cursos.
* `GET /cursos/:id` - Busca um curso específico.
* `PATCH /cursos/:id` - Atualiza os dados do curso.
* `DELETE /cursos/:id` - Deleta um curso.

### Matrículas
* `POST /matriculas` - Matricula um aluno em um curso.
* `GET /matriculas/aluno/:id` - Lista todos os cursos de um aluno.
* `GET /matriculas/curso/:id` - Lista todos os alunos de um curso.
