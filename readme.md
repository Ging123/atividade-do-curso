# ATIVIDADE DO CURSO DO SENAI 

### MELHORAS FRAN S2

## DESCRIÇÃO
Você foi convidado a desenvolver um sistema de uma empresa de móveis planejados.
A empresa funciona da seguinte forma: o usuário solicita um móvel, passando os dados: nome do móvel, cor, medidas, material e um link para a imagem do móvel. A empresa, designa o móvel a ser construído para um dos funcionários, que por sua vez estará com status: Disponível ou Indisponível, além do nome dele. A venda do móvel terá um valor, o status: Solicitado, Em construção ou Entregue. Quando o status da venda for entregue o Funcionário associado ao serviço, voltará ao status de disponível.

## COMO RODAR 
É necessario que você levante um servidor para api e um para o client.

### API
Para executar a api é necessario que se crie um **.env** baseado no **example.env** na
pasta da api. Após isso execute os seguintes códigos:
```
cd api
npm install
npm run start
```
ou caso você queira pode se rodar a api com o docker
```
cd api
docker-composer up -d
```

### CLIENT
Para executar o front basta executar os seguintes códigos
```
cd client
npm install
npm run start
```

## TECNOLOGIAS
- Node js
- Express
- Typescript
- Docker
- Mongo
- React js
- Scss
