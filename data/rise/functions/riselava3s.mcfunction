execute as @e[name=Level] at @s run tp @s ~ ~1 ~
execute as @e[name=Level] at @s run fill 75 ~-2 75 -74 ~-2 -74 lava replace air
execute as @e[name=Level] at @s run fill 75 ~-2 75 -74 ~-2 -74 lava replace water
schedule function rise:riselava3s 3s