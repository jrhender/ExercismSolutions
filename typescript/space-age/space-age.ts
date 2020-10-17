class SpaceAge {
    private readonly secondsInEarthYear: number = 31557600;

    constructor(readonly seconds: number) {}

    private calculateAge(orbitalPeriodInEarthYears: number) {
        const secondsInOneYear: number = this.secondsInEarthYear * orbitalPeriodInEarthYears;
        const age: number = this.seconds/secondsInOneYear;
        return parseFloat(age.toFixed(2));
    }

    onEarth = (): number => this.calculateAge(1);
    onMercury = (): number => this.calculateAge(0.2408467);
    onVenus = (): number => this.calculateAge(0.61519726);
    onMars = (): number => this.calculateAge(1.8808158);
    onJupiter = (): number => this.calculateAge(11.862615);
    onSaturn = (): number => this.calculateAge(29.447498);
    onUranus = (): number => this.calculateAge(84.016846);
    onNeptune = (): number => this.calculateAge(164.79132);
}

export default SpaceAge;