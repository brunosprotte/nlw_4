# NLW 4

Desta vez a Rocketseat mudou o formato do evento Next Level Week e trouxe 3 trilhas de foco

Este projeto traz a trilha de ReactJS e o foco é no uso da ContextAPI, uma forma aprimorada de compartilhar dados entre os componentes da aplicação

O uso da context API neste projeto pode ser observado nos componentes `ChallengesContext` e `CountdownContext`

### Sobre esta aplicação

*MoveIt* é uma aplicação tem a missão de ajudar pessoas que passam muito tempo sentadas e fazendo uso do computador, ela *gamifica* e torna divertida a execução de pequenos exercícios em intervalos de vinte e cinco minutos o que retarda e em muitos casos evita problemas graves de saúde


# Detalhes técnicos estudados durante o evento

### `ChallengesContext`

Este componente é responsável por controlar os desafios e nível do usuário, concentra toda regra de negócio da aplicação e é acessado por demais componentes da aplicação através do recurso ContextAPI

O componente é declaro em `index.tsx` e todos os demais componentes ficam dentro de sua declaração, isso faz com que seu uso esteja disponível para toda a aplicação

### `CountdownContext`

Este componente abriga a lógica responsável pelo funcionamento do *timer*, como depende dos dados do `ChallengesContext`, este componente é declarado dentro do `ChallengesContext` no `index.tsx` 

### `Next.JS`

O Next.JS é ferramenta possibilita, principalmente, a indexação de páginas web por motores de busca, isso é possível pela funcinalidade que a ferramenta tras que permite a construção das páginas antes de elas serem entregues para o navegador, isto é, caso a construção de uma página necessite de dados do servidor, estes dados serão buscados e colocados na página antes dela ser entregue ao cliente e quando for, a requisição feita para buscar estes já terá sido realizada e o processamento do retorno já terá sido executado e o cliente receberá apenas o código html pronto para ser exíbido.

O funcionamento da explicação acima pode ser observado no arquivo `index.tsx` através da função `getServerSideProps` que processa os cookies disponíveis na aplicação no "lado servidor"

# Executando o projeto

Na raiz do projeto execute

`yarn`

`yarn dev` 