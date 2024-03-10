const defaultColor = "#dd8811"
const defaultIcon = "/card_icons/default.svg"
class CardType {
  public title: string;
  public icon: any;
  public color: string;
  constructor(title: string, color: string = defaultColor, icon: any = defaultIcon) {
    this.title = title;
    this.color = color
    this.icon = icon
  }
}

const CardTypes = [ //Типа енума из java, где под числовыми ключами лежат объекты.
  new CardType("Профессия"),
  new CardType("Хобби"),
  new CardType("Здоровье"),
  new CardType("Рюкзак"),
  new CardType("Личный факт"),
  new CardType("Факт"),
  new CardType("Способность"),
  new CardType("Бункер"),
  new CardType("Апокалипсис"),
];

export default CardTypes;
