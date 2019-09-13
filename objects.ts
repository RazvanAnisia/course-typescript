const profile = {
  name: 'dodel',
  age: 2,
  coords: {
    lat: 22,
    long: 25
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
console.log(lat);
console.log(long);
