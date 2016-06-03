#!/usr/bin/env node

'use strict';

const request = require('request');
const meow = require('meow');
const chalk = require('chalk');

const cli = meow(`
  getbikes <station-id>

  getbikes : get list of all stations names and descriptions

`, {
  alias: {
    'v': 'version',
    'h': 'help'
  }
});

let stationId = cli.input.join(' ');
stationId = stationId.trim();

const uri = "http://api.citybik.es/elpaso.json";

request(uri, (error, response, body) => {

  if (!error && response.statusCode == 200) {
    let data = JSON.parse(body);

    if (stationId.length < 1) {
      data.forEach( station => {
        console.log(`
          Station id ${ station.id } | Station name ${ station.name }
        `)
      })
    } else {
      let result = data.filter( station => station.id == stationId);

      if ( result.length < 1 ) {
        throw new Error('invalid input');
      }
      // success
      console.log(`
        Station: ${ chalk.bold.white(result[0].name) }
            - n. of availble bikes ${ result[0].bikes > 2 ? chalk.bold.green(result[0].bikes) : chalk.bold.red(result[0].bikes) }
            - n. of availble docks ${ result[0].free > 2 ? chalk.bold.green(result[0].free) : chalk.bold.red(result[0].free) }
      `);

    }
  }
})
