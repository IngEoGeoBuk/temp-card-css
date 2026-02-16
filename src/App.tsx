
import Card from "./Card/Card";

export default function App() {
  return (
    <div>
      <p>unique 1</p>
      <Card imageUrl={'https://ingeogeobuk.github.io/temp-card-css/images/temp3.png'} rarity="unique" />
      <p>unique 2</p>
      <Card imageUrl={'https://ingeogeobuk.github.io/temp-card-css/images/temp.png'} rarity="unique" />
      <p>legendary</p>
      <Card imageUrl={'https://ingeogeobuk.github.io/temp-card-css/images/temp3.png'} rarity="legendary" />
      <p>rare</p>
      <Card imageUrl={'https://ingeogeobuk.github.io/temp-card-css/images/temp3.png'} rarity="rare" />
      <p>epic</p>
      <Card imageUrl={'https://ingeogeobuk.github.io/temp-card-css/images/temp3.png'} rarity="epic" />
    </div>
  )
}
