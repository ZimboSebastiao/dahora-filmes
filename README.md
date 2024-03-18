# DaHora Filmes

Exemplo de app nativo multiplataforma criado com React Native e Expo.

## Branch 08

- Criação da tela `Detalhes.js` e adição dela à `Stack ` em `App.js`
- Em `CardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**

## Branch 06

### Resumo

#### API de FIlmes

- Cadastro na API do TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de variável ambiente através do arquivo `.env` contendo a API Key via Expo.

#### Consumo de dados da API

- Instalação da lib **Axios**
- Configuração do `services/api-moviedb.js` contendo a programação básica de acesso à API para uso em diferentes partes do app.

## Branch 10 - Processo de Build

### Roteiro geral para o build usando Expo EAS

1. Acessar a sua conta Expo e criar um projeto no EXPO EAS: https://expo.dev
2. Instalar o eas-cli: `npm install --global eas-cli`
3. Adicionar o id do projeto ao aplicativo: `npx create-expo-app flixity`
4. Verificar a conta logada: `eas whoami`
   4.1 Se não estiver logado use: `eas login`
   4.2 Se estiver logado e quiser deslogar (ou trocar de usuário): `eas logout`
5. Configurar o build (compilação): `eas build:configure`
6. iniciar o processo de Build/compilação: `eas build --profile preview`

## Branch 09

`AsyncStorage` é uma lib mantida pela equipe do expo que permite armazenar dados **offline** em formato de `string` no dispositivo do usuário. É uma lib semelhante à API web `localStorage` usada em sites

## Branch 07

- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos à `FlatList` componentes personalizados para caso não haver filmes na busca (`NaoEcontrado/ListEmptyComponent`) e para separar cada elemento da `FlatList` (`Separador/ItemSeparadorComponent`)

## Branch 05

- Compomentes/Recursos nativos: `TextIpunt`, `Vibtration` e `Alert`
- Eventos: `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state` usando a função `filmeDigitado`
- `onPress` no `Button` para acionamento da função `buscarFilmes`
- `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branch 04

Para gerenciar recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** e a **Expo Router**

Atualmente (Fevereiro/2024) a biblioteca mais usada e considerada padrão é a **Router Navigation**

### Site Oficiais:

- React Navigation: https://reactnavigation.org/
- Expo Router: https://docs.expo.dev/router/introduction

### Como usar o React Navigation com navegação stack

### Dependências

React Navigation: `npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Tipo de Mecanismo de navegação: `npm install @react-navigation/native-stack`

### Configurações

No `app.js` importamos o `NavigationContainer` e o `creacteNativeStackNavigator`, em seguida os configuramos para determinar o `Stack.Navigator` e as telas `Stack.Screen` e seus componentes correspondetntes (no momemnto, apenas `Home`, `Privacidade` e `Sobre`).

Em `Home` configuramos os botões para navegar para as telas usando a prop `navigation` e o método `navigate`

## Branch 03

- Criação das telas básicas: Sobre e privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem.
- Componente `Linking` para criação de link para a web.

## Bramch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Impostação das fontes com auxílio dos `hooks` `useFonts` e `useCallback.`

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/
- https://docs.expo.dev/guides/icons/

## Dica

Instale a extensão **ES7+ React...** no VSCode para facilitar a programação de componentes.
