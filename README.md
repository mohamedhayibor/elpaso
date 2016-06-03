# elpaso  ![](https://img.shields.io/badge/status-stable-green.svg)

This module is a command line tool that gets you the real-time info on stations. Particularly the number of bikes available for rent and the number of available docks.

## Installation
```sh
  > npm install -g elpaso
```

> Don't forget the "-g" to install it globally. (then you can run the `bikes` command anywhere)

## Usage

![](http://g.recordit.co/kQOlS2a9V2.gif)

On your terminal:
```sh
  > getbikes `station-id`
```
Basically the bikes command and whatever station you want to check.

At first, you will obviously not know the id of a particular station. Run the command this command below to the list of all stations ids and names:
```sh
  > getbikes
```
You can get that with the command `bikes`. It is a deliberate api design decision. The reality is that you most frequently use only 3 to 4 stations anyways. By your fourth use, you will know the id by heart (one or two digits). Then you can pretty much make the query in less a second. (Will save you a lot of time).

#### Api

No api to mess with. Enter the command `bikes` and the `station-id` and get an instant update (number of bikes and docks available). Enter `bikes` only to get the updated list of stations ids and name.

Thanks to Ekerda for his [awesome project](http://www.citybik.es/).

Thanks to the Attendees of [BostonJS](http://www.meetup.com/boston_JS/) they made it happen.

> few lines of code.

## License
MIT © [BostonJS](http://bostonjs.com)
