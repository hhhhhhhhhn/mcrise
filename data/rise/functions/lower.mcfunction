execute as @e[name=Level] at @s run tp @s ~ ~-1 ~
execute as @e[name=Level] at @s run fill 75 ~ 75 -74 ~ -74 air replace lava
execute as @e[name=Level] at @s run fill 75 ~ 75 -74 ~ -74 air replace water
schedule function rise:lower 3s