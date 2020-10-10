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
}

export class ResistorColor {
  private colors: ResistorBand[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present'
    }
    const firstColor = colors[0] as keyof typeof ResistorBand;
    const secondColor = colors[1] as keyof typeof ResistorBand;
    this.colors = [ResistorBand[firstColor], ResistorBand[secondColor]];
  }
  
  value = (): number => {
    const [firstColor, secondColor] = this.colors;
    return firstColor.valueOf() *10 + secondColor.valueOf()
  } 
}
