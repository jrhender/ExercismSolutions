enum ResistorBand {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
};

type ResistorBandKey = keyof typeof ResistorBand;

export class ResistorColor {
  private colors: ResistorBand[];

  constructor(colors: ResistorBandKey[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present'
    }
    const firstColor = colors[0];
    const secondColor = colors[1];
    this.colors = [ResistorBand[firstColor], ResistorBand[secondColor]];
  }
  
  value = (): number => {
    const [firstColor, secondColor] = this.colors;
    return firstColor.valueOf() * 10 + secondColor.valueOf()
  } 
}
