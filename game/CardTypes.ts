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

const CardTypes = [
  //Типа енума из java, где под числовыми ключами лежат объекты.
  new CardType("Биология", "#c60"),
  new CardType("Профессия", "#ddd"),
  new CardType("Хобби", "#080"),
  new CardType("Здоровье", "#800"),
  new CardType("Рюкзак", "#840"),
  new CardType("Личный факт", "#48a"),
  new CardType("Факт", "#096"),
  new CardType("Возможность", "#808"),
  new CardType("Бункер", "#000"),
  new CardType("Апокалипсис", "#e30"),
];

export default CardTypes;
