const convertToCelsius = (fahrenheit) => {
  let celsius = (fahrenheit - 32) / (9 / 5);
  return celsius;
};

const describeTemperature = (fahrenheit) => {
  let celsius = convertToCelsius(fahrenheit);
  celsius = Math.trunc(celsius);
  let description = `${fahrenheit} fahrenheit is ${celsius} celsius. Expect it to be `;

  if (celsius < 0) {
    return (description += `very cold.`);
  } else if (celsius < 20) {
    return (description += `cold.`);
  } else if (celsius < 30) {
    return (description += `warm.`);
  } else if (celsius < 40) {
    return (description += `hot.`);
  } else if (celsius >= 40) {
    return (description += `very hot.`);
  }
};

let fahrenheit = prompt("Enter temperature in Fahrenheit", "70");
alert(describeTemperature(fahrenheit));
