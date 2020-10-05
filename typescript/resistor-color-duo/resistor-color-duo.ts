const resistorBands: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present'
    }
    this.colors = colors;
  }
  
  value = (): number => {
    const [firstColor, secondColor] = this.colors;
    const firstDigit: number = resistorBands[firstColor];
    const secondDigit: number = resistorBands[secondColor];
    return firstDigit * 10 + secondDigit
  } 
}
