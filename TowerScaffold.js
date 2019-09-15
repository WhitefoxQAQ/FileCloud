var scriptName = "Tower Scaffold";
var scriptVersion = 1.4;
var scriptAuthor = "Edit by Wu_dian;yorik100, EzHacksYT";
var towerModule = moduleManager.getModule("Tower");
var scaffoldModule = moduleManager.getModule("Scaffold");

var towerScaffold = new TowerScaffold();

var client;

function TowerScaffold() {
    this.getName = function() {
        return "TowerScaffold";
    };

    this.getDescription = function() {
        return "Scaffold Addon";
    };

    this.getCategory = function() {
        return "World";
    };
    this.onEnable = function() {
    }
    this.onUpdate = function() {
        if (mc.gameSettings.keyBindJump.isKeyDown() && (mc.thePlayer.moveForward == 0.2 && mc.thePlayer.moveStrafing == 0.2)) {
			    mc.thePlayer.motionX = 0;
                mc.thePlayer.motionZ = 0;
                mc.thePlayer.jumpMovementFactor = 0;
				mc.thePlayer.onGround = false;
				towerModule.setState(true)
				scaffoldModule.setState(true)
}else{
			    towerModule.setState(false)
				scaffoldModule.setState(true)
		}
}
    this.onDisable = function () {
        towerModule.setState(false)
		scaffoldModule.setState(false)
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(towerScaffold);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}