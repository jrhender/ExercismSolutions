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
  private colors: ResistorBandKey[];

  constructor(colors: ResistorBandKey[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present'
    }
    this.colors = colors;
  }
  
  value = (): number => {
    const [firstColor, secondColor] = this.colors;
    return ResistorBand[firstColor] * 10 + ResistorBand[secondColor]
  } 
}
