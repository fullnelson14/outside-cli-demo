const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async (args) => {
  const spinner = ora().start();
  
  try {
      let location = args.location || args.l || await getLocation();
      const weather = await getWeather(location);

      spinner.stop();
      
      console.log(`Current weather in ${location}:`);
      console.log(`\t ${weather.condition.temp}° ${weather.condition.text}`)
  } catch (err) {
      
      spinner.stop();

      console.log(err);
      
  }
}