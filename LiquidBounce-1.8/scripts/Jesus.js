var scriptName = "Jesus";
var scriptVersion = 1.0; 
var scriptAuthor = "Etho"; 

var StrafeModule = moduleManager.getModule("Strafe")

function Jesus() {

    var Mode = value.createList("Mode", ["Basic", "Motion"], "Basic");
    var Strafe = value.createBoolean("Strafe", true);

    BlockPos = Java.type('net.minecraft.util.BlockPos')
    BlockWater = Java.type('net.minecraft.block.BlockLiquid')

	this.getName = function () {
		return "Jesus";
	}
	this.getDescription = function () {
		return "Jesus Reloaded";
	}
	this.getCategory = function () {
		return "Fun";
	}
	this.onEnable = function () {



    }
    
	this.onUpdate = function () {
        if(Mode.get() == "Motion") {
	    	if(mc.thePlayer.isInWater()){
                if(mc.gameSettings.keyBindSneak.pressed) {
                    mc.thePlayer.motionY = -0.45
                } else {
                    mc.thePlayer.motionY = 0.35
                }

                if(mc.gameSettings.keyBindJump.pressed) {
                    mc.thePlayer.motionY = 0.25
                }
            }
        }

        if(Mode.get() == "Basic") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.05, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindSneak.pressed) {
                    mc.thePlayer.motionY = -0.45
                } else {
                    mc.thePlayer.motionY = 0.022
                }

                if(mc.gameSettings.keyBindJump.pressed) {
                    mc.thePlayer.motionY = 0.022
                }
            }
        }
    }
    
    this.onMotion = function () {
        if(Mode.get() == "Motion") {
            if(mc.thePlayer.isInWater()) {
                if(mc.gameSettings.keyBindForward.pressed) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX - Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.4, mc.thePlayer.posY, mc.thePlayer.posZ + Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.4)
                }
            }
        }

        if(Mode.get() == "Basic") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindForward.pressed) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX - Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.05, mc.thePlayer.posY, mc.thePlayer.posZ + Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.05)
                }
            }
        }
    }

    this.onDisable = function() {
        StrafeModule.setState(false);
    }
    
    this.addValues = function(values) {
        values.add(Mode);
        values.add(Strafe);
    }
}


var Jesus = moduleManager.registerModule(new Jesus)
function onEnable() {
    Jesus;
};

function onDisable() {
    moduleManager.unregisterModule(Jesus);
};