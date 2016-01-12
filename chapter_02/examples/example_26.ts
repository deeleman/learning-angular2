class Car {
    private _distanceRun: number;

    constructor(public isElectric: string) {
        this.distanceRun = 0;
    }

    drive(distance: number): void {
        this._distanceRun += distance;
    }

    static honk(): string {
        return 'HOOONK!';
    }

    get distance(): number {
        return this._distanceRun;
    }
}
