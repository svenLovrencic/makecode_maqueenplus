let move_x_ms = input.runningTime() + 2000
while (input.runningTime() < move_x_ms) {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
}
DFRobotMaqueenPlus.mototStop(Motors.ALL)
basic.forever(function () {
	
})
