import MainPage from '../../pages/main/main';

type AppScreenProps = {
  numberOfCards: number;
}

function App({ numberOfCards }: AppScreenProps): JSX.Element {
  return <MainPage numberOfCards={numberOfCards} />;
}

export default App;
