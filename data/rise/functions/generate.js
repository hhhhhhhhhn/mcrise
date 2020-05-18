const fs = require("fs")

var time = 60
for(let arg of process.argv){
	if(!isNaN(Number(arg))) time = Number(arg)
}

for (let i = 2; i < 256; i++) {
	fs.writeFileSync(`./risel/${i}.mcfunction`,
	`schedule function rise:risel/${i + 1} ${time}s\n` + 
	`fill 75 ${i} 75 -74 ${i} -74 lava replace air\n` +
	`fill 75 ${i} 75 -74 ${i} -74 lava replace water`
	)
}

for (let i = 2; i < 256; i++) {
	fs.writeFileSync(`./risew/${i}.mcfunction`,
	`schedule function rise:risew/${i + 1} ${time}s\n` + 
	`fill 75 ${i} 75 -74 ${i} -74 water replace air`
	)
}

