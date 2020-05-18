# rise
Minecraft datapack with functions to raise the water/lava levels.

## Installation
First, download this repository as a `.zip` file. Open it, and extract the
`mcrise-master` folder to your save's `datapacks` folder.

## Usage
To start the water level rise, run `/function rise:startwater`. To start with
lava, use `/function rise:startlava`

## Change time per rise
By default, the water/lava levels will rise 1 block every minute. To change
this, run the `generate.js` file with nodejs, with the number of seconds as
an argument. For example, `node generate 120` will make the water level rise
every two minutes.