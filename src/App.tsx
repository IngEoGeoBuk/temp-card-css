const img2 = "/images/temp2.png";
const img3 = "/images/temp3.png";

import Card from "./Card/Card";

export default function App() {
  return (
    <div>
      <Card imageUrl={img3} rarity="legendary" />
      <Card imageUrl={img2} rarity="rare" />
      <Card imageUrl={img3} rarity="epic" />
      <Card imageUrl={img3} rarity="unique" />
    </div>
  )
}
