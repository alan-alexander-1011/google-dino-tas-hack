function tas_hack(speed_hack, jump_velocity, gameOver_setting){
    
    if (speed_hack === 'original') {// if the speed hack parameter = 'original' then it will set to normal speed
        Runner.instance_.setSpeed(6)
        Runner.config.SPEED = 6
    } else if (speed_hack != 'original') {// opposite of the upper setting but when you NOT type 'original' but instead you type a number
        Runner.instance_.setSpeed(speed_hack)
        Runner.config.SPEED = speed_hack
    } else if (jump_velocity === 'original') {// if the jump velocity hack parameter = 'original' then it will set to normal velocity
        Runner.instance_.tRex.setJumpVelocity(7)
        Runner.config.INITIAL_JUMP_VELOCITY = 7
    } else if (jump_velocity !== 'original') {// opposite of the upper setting but when you NOT type 'original' but instead you type a number
        Runner.instance_.tRex.setJumpVelocity(jump_velocity)
        Runner.config.INITIAL_JUMP_VELOCITY = jump_velocity
    }
    
    if (gameOver_setting == 1) { // if the gameOver setting you give is 1. then it will make you invincible.
        Runner.prototype.gameOver = function (){}
    } else if (gameOver_setting == 'original') {//the opposite of the upper setting, but when you type original
        Runner.prototype.gameOver = originalGameOver
    }
}
//how to type:
//goto console in google dev window, then type tas_hack('int speed do you want to hack', 'int jump velocity(i think it won't work) you want to hack', '1 to invicible, "original" for normal dead')
