const menus = {
    main: `
      outside [command] <options>

      commands:
      today................ show weather for today
      forecast............. show 10-day forecast
      version.............. show version
      help................. show help for a command
      `,
    today: `
      outside today <options>

      --location, -l <input>...... the location to use

      ## if no location is used, will default to current location
      `,
    forecast: `
      outside forecast <options>

      --location, -l <input>...... the location to use
      
      ## if no location is used, will default to current location
      `,
  
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    
//    console.log(args._);
//    console.log(subCmd);
    console.log(menus[subCmd] || menus.main);
    
}
