# DaHora Filmes

Exemplo de app nativo multiplataforma criado com React Native e Expo.

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
