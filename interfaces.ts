interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  paste: false,
  summary: function() {
    return `${this.name} is from ${this.year} and it is ${this.broken}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
