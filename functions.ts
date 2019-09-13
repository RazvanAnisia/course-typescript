interface Message {
  text: 'string';
}

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: Message) => {
  console.log(message.text);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//ES6
const logWeather2 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
logWeather2(todaysWeather);
