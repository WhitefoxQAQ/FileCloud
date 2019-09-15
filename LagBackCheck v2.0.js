var scriptName = "LagBackCheck";
var scriptAuthor = "BestNub;Edit by Wu_dian";
var scriptVersion = 2.0;

var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var FileWriter = Java.type("java.io.FileWriter");
var BufferedWriter = Java.type("java.io.BufferedWriter");
var Timer = Java.type("java.util.Timer");

var speed = moduleManager.getModule("Speed");
var fly = moduleManager.getModule("Fly");
var longjump = moduleManager.getModule("LongJump");
var speedState = false;
var speedMoving = false;
var flyState = false;
var flyMoving = false;
var longjumpState = false;
var longjumpMoving = false;
var notify = true;

var config = {
    speed: false,
    longjump: true,
    fly: true
}

var chatPrefix = "§8[§2LagBackCheck§8]";

function log(message, isError) {
    if (isError) {
        chat.print(chatPrefix + " §c" + message);
    } else {
        chat.print(chatPrefix + " §b" + message);
    }
}

function readFile(filePath) {
    try {
        var file = new File(filePath);
        var reader = new BufferedReader(new FileReader(file));
        var content = [];
        var line;

        while ((line = reader.readLine()) !== null) {
            content.push(line);
        }

        return content;
    } catch (err) {
        log("Unable to open file!", true);

        throw err;
    }
}

function writeFile(path, string) {
    try {
        writer = new BufferedWriter(new FileWriter(path));
        writer.write(string);

        writer.close();
    } catch (err) {}
}

function saveConfig() {
    var configJSON = JSON.stringify(config);

    writeFile(mc.mcDataDir + "/LagBackCheck.json", configJSON);
}

function loadConfig() {
    try {
        config = JSON.parse(readFile(mc.mcDataDir + "/LagBackCheck.json").join(""));
    } catch (err) {}
}

function FlagModule() {
  this.getName = function () {
    return "LagBackCheck";
  }

  this.getDescription = function () {
    return "Detects Flags and disables it!"
  }

  this.getCategory = function () {
    return "Misc";
  }

  this.onUpdate = function () {
    speedState = speed.getState();
	flyState = fly.getState();
	longjumpState = longjump.getState();
    if (speedState && mc.gameSettings.keyBindForward.isKeyDown()) {
      if ((mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) && speedMoving) {
		if (config.speed){
        speed.setState(false);
        if (notify) {
          log("Flag detected! Disabled Speed!",true);
        }
      }else{
		  log("Speed Flagged!",true);
	  }
	  }
      speedMoving = true;
    } else {
      speedMoving = false;
    }
	if (longjumpState && mc.gameSettings.keyBindForward.isKeyDown()) {
      if ((mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) && longjumpMoving) {
		if (config.longjump){
        longjump.setState(false);
        if (notify) {
          log("Flag detected! Disabled LongJump!",true);
        }
      }else{
		  log("LongJump Flagged!",true);
	  }
	  }
      longjumpMoving = true;
    } else {
      longjumpMoving = false;
    }
	if (flyState && mc.gameSettings.keyBindForward.isKeyDown()) {
      if ((mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) && flyMoving) {
		if(config.fly){
        fly.setState(false);
        if (notify) {
          log("Flag detected! Disabled Fly!",true);
        }
      }else{
		  log("Fly Flagged!",true);
	  }
	  }
      flyMoving = true;
    } else {
      flyMoving = false;
    }
  }

  this.onDisable = function () {
  }
}
function PenShenCommand() {
    this.getName = function () {
        return "LagBackCheck";
    }

    this.getAliases = function () {
        return ["lagback"];
    }

    this.execute = function (args) {
        if (args.length < 2) {
			log("---------------帮助说明---------------", false);
            log("此JS为免费发布,用以检测反作弊拉回", false);
            log("反作弊拉回时可以关闭移动类的功能", false);
            log("输入.lagback <speed/fly/longjump>", false);
            log("以单独开启speed/fly/longjumpd的检测", false);
            log("若把检测设置为False,则只显示拉回提示", false);
            log("-------Made By QQ2319939647----------", false);
            return;
        }

        switch (args[1].toLowerCase()) {
            case "speed":
                config.speed = !config.speed;
                log("Set Speed Check to " + config.speed, false);
                saveConfig();

                break;
            case "fly":
                config.fly = !config.fly;
                log("Set Fly Check to " + config.fly, false);
                saveConfig();

                break;
            case "longjump":
                config.longjump = !config.longjump;
                log("Set LongJump Check to " + config.longjump, false);
                saveConfig();

                break;

            default:
                log("Syntax Error: .LagBackCheck <Speed/Fly/LongJump>", true);
        }
    }
}
var flagModule = new FlagModule();
var PenShenCommand = new PenShenCommand();

var flagModuleClient;
var PenShenCommandClient;

function onEnable() {
	loadConfig();
	
	flagModuleClient = moduleManager.registerModule(flagModule);
	PenShenCommandClient = commandManager.registerCommand(PenShenCommand);
}

function onDisable() {
  moduleManager.unregisterModule(flagModuleClient);
  commandManager.unregisterCommand(PenShenCommandClient);
}