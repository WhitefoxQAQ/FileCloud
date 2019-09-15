var scriptName = "AutoDisable";
var scriptAuthor = "Wu_dian";
var scriptVersion = 2.1;

var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var FileWriter = Java.type("java.io.FileWriter");
var BufferedWriter = Java.type("java.io.BufferedWriter");
var Timer = Java.type("java.util.Timer");

var tower = moduleManager.getModule("Tower");
var scaffold = moduleManager.getModule("Scaffold");
var killaura = moduleManager.getModule("KillAura");
var invclear = moduleManager.getModule("InventoryCleaner");
var chest = moduleManager.getModule("ChestStealer");
var bugup = moduleManager.getModule("BugUp");
var speed = moduleManager.getModule("Speed");
var longjump = moduleManager.getModule("LongJump");
var fly = moduleManager.getModule("Fly");
var spam = moduleManager.getModule("Spammer");


var config = {
    towerc: false,
	scaffoldc: true,
	killaurac: true,
	invclearc: true,
	chestc: true,
	bugupc: true,
	speedc: true,
	flyc: true,
	longjumpc: true,
	notify: true,
	spamc: false
}

var chatPrefix = "§8[§2AutoDisable§8]";

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

    writeFile(mc.mcDataDir + "/AutoDisable.json", configJSON);
}

function loadConfig() {
    try {
        config = JSON.parse(readFile(mc.mcDataDir + "/AutoDisable.json").join(""));
    } catch (err) {}
}

function FlagModule() {
  this.getName = function () {
    return "AutoDisable";
  }

  this.getDescription = function () {
    return "Disable some shit when your Dead";
  }

  this.getCategory = function () {
    return "Misc";
  }

  this.onUpdate = function () {
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.towerc){
			  tower.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.scaffoldc){
			  scaffold.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.killaurac){
			  killaura.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.invclearc){
			  invclear.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.chestc){
			  chest.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.bugupc){
			  bugup.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.speedc){
			  speed.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.flyc){
			  fly.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.spamc){
			  spam.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
		  if (config.longjumpc){
			  longjump.setState(false)
		  }
		}
		if (mc.thePlayer.getHealth() < 0.1) {
			if (config.notify){
		  chat.print("§8[§2AutoDisable§8]§c Some shit Has Been Disable When your Dead");
		}
		}
	}
}
function PenShenCommand() {
    this.getName = function () {
        return "AutoDisable";
    }

    this.getAliases = function () {
        return ["ad"];
    }

    this.execute = function (args) {
        if (args.length < 2) {
			log("---------------帮助说明---------------", false);
            log("此JS为免费发布,用以死亡自动关闭功能", false);
			log("可设置死亡自动关闭的功能有:", false);
			log("Tower/Scaffold/KillAura", false);
			log("InventoryCleaner/ChestStealer/Bugup", false);
			log("Speed/LongJump/Fly/Spammer", false);
			log("输入.ad [需要自动关闭的功能]以开启关闭", false);
			log("输入.ad notify 关闭死亡关闭功能提示", false);
            log("-------Made By QQ2319939647----------", false);
            return;
        }

        switch (args[1].toLowerCase()) {
            case "tower":
                config.towerc = !config.towerc;
                log("Set Tower to " + config.towerc, false);
                saveConfig();
                break;
				
            case "scaffold":
                config.scaffoldc = !config.scaffoldc;
                log("Set Scaffold to " + config.scaffoldc, false);
                saveConfig();
                break;
				
            case "killaura":
                config.killaurac = !config.killaurac;
                log("Set KillAura to " + config.killaurac, false);
                saveConfig();
                break;
            case "inventorycleaner":
                config.invclearc = !config.invclearc;
                log("Set InventoryCleaner to " + config.invclearc, false);
                saveConfig();
                break;
            case "cheststealer":
                config.chestc = !config.chestc;
                log("Set ChestStealer to " + config.chestc, false);
                saveConfig();
                break;
            case "bugup":
                config.bugupc = !config.bugupc;
                log("Set BugUp to " + config.bugupc, false);
                saveConfig();
                break;
            case "speed":
                config.speedc = !config.speedc;
                log("Set Speed to " + config.speedc, false);
                saveConfig();
                break;
            case "fly":
                config.flyc = !config.flyc;
                log("Set Fly to " + config.flyc, false);
                saveConfig();
                break;
            case "longjump":
                config.longjumpc = !config.longjumpc;
                log("Set LongJump to " + config.longjumpc, false);
                saveConfig();
                break;
            case "spammer":
                config.spamc = !config.spamc;
                log("Set Spammer to " + config.spamc, false);
                saveConfig();
                break;
			case "notify":
                config.notify = !config.notify;
                log("Set Notify to " + config.notify, false);
                saveConfig();
                break;
            default:
                log("Syntax Error: .AutoDisable <Tower/Scaffold/KillAura/InventoryCleaner/ChestStealer/Bugup/Speed/LongJump/Fly/Spammer/notify>", true);
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