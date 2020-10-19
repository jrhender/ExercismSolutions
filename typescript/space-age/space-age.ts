class SpaceAge {
    private readonly secondsInEarthYear: number = 31557600;

    constructor(readonly seconds: number) {}

    private calculateAge(orbitalPeriodInEarthYears: number): () => number {
        return () => {
            const secondsInOneYear: number = this.secondsInEarthYear * orbitalPeriodInEarthYears;
            const age: number = this.seconds/secondsInOneYear;
            return parseFloat(age.toFixed(2));
        }
    }

    onEarth = this.calculateAge(1);
    onMercury = this.calculateAge(0.2408467);
    onVenus = this.calculateAge(0.61519726);
    onMars = this.calculateAge(1.8808158);
    onJupiter = this.calculateAge(11.862615);
    onSaturn = this.calculateAge(29.447498);
    onUranus = this.calculateAge(84.016846);
    onNeptune = this.calculateAge(164.79132);
}

export default SpaceAge;