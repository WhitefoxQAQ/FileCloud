var scriptName = "ModCheck";
var scriptAuthor = "Wu_dian";
var scriptVersion = 2.0;

var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var FileWriter = Java.type("java.io.FileWriter");
var BufferedWriter = Java.type("java.io.BufferedWriter");
var Timer = Java.type("java.util.Timer");

var config = {
    spamDelay: 5000
}

var chatPrefix = "§8[§aModCheck§8]";

function log(message, isError) {
    if (isError) {
        chat.print(chatPrefix + " §c" + message);
    } else {
        chat.print(chatPrefix + " §b" + message);
    }
}


function randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function setInterval(func, milliseconds) {
    var timer = new Timer("setInterval", true);

    timer.schedule(function () {
        func();
    }, milliseconds, milliseconds);

    return timer;
}

function clearInterval(timer) {
    timer.cancel();
}

function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function () {
        func();
    }, milliseconds);

    return timer;
}

function FileSpammerModule() {
    var spamInterval;

    this.getName = function () {
        return "ModCheck";
    }

    this.getDescription = function () {
        return "Kill Mod's Mon.";
    };

    this.getCategory = function () {
        return "Misc";
    }

    this.onEnable = function () {
        var spamFile = [
			"/p crazyforlove"
		   ,"/p chen_duxiu"
		   ,"/p l_vJerryv_l"
  		   ,"/p 造化钟神秀"
		   ,"/p MadAndBlue"
		   ,"/p 绅士龙"
		   ,"/p 时光易老不忘初心"
		   ,"/p tanker_01"
		   ,"/p Redstrqfe"
		   ,"/p chen_xixi"
		   ,"/p owenkill"
		   ,"/p 魂魄妖梦"
		   ,"/p heav3ns"
		   ,"/p snowday"
		   ,"/p chrisan"
		   ,"/p hefew"
		   ,"/p bingmo"
		   ,"/p 小阿狸"
		   ,"/p mxu"]
		var check = [
			"crazyforlove"
		   ,"chen_duxiu"
		   ,"l_vJerryv_l"
		   ,"造化钟神秀"
		   ,"MadAndBlue"
		   ,"绅士龙"
		   ,"时光易老不忘初心"
		   ,"tanker_01"
		   ,"Redstrqfe"
		   ,"chen_xixi"
		   ,"owenkill"
		   ,"魂魄妖梦"
		   ,"heav3ns"
		   ,"snowday"
		   ,"chrisan"
		   ,"hefew"
		   ,"bingmo"
		   ,"小阿狸"
		   ,"mxu"]
        var spamIndex = 0;

        spamInterval = setInterval(function () {
			log("Checking: " + "§d"+check[spamIndex], false);
			mc.thePlayer.sendChatMessage(spamFile[spamIndex]);
            if (spamIndex < spamFile.length - 1) {
                spamIndex++;
            } else {
                spamIndex = 0;
            }
        }, config.spamDelay);
    }

    this.onDisable = function () {
        clearInterval(spamInterval);
    }
}

function FileSpammerCommand() {
    this.getName = function () {
        return "ModCheck";
    }

    this.getAliases = function () {
        return ["mck"];
    }

    this.execute = function (args) {
        if (args.length < 2) {
            log(".ModCheck <delay> <ms>设置ModCheck的检查速度(建议5000ms)", false);
			log("----------Made By qq 2319939647 ---------", false);
            return;
        }

        switch (args[1].toLowerCase()) {
            case "delay":
                if (args.length < 3) {
                    log("指令错误: .ModCheck delay <ms>", true);
                    return;
                }

                var input = parseInt(args[2]);

                if (input < 0) {
                    log("请输入一个比0大的数", true);
                    return;
                }

                config.spamDelay = input;
                log("检查速度设置为: " + input +"ms", false);
                

                break;
            default:
                log("指令错误, .ModCheck <delay> <ms>", true);
        }
    }
}

var fileSpammerModule = new FileSpammerModule();
var fileSpammerCommand = new FileSpammerCommand();

var fileSpammerModuleClient;
var fileSpammerCommandClient;

function onEnable() {

    fileSpammerModuleClient = moduleManager.registerModule(fileSpammerModule);
    fileSpammerCommandClient = commandManager.registerCommand(fileSpammerCommand);
}

function onDisable() {
    moduleManager.unregisterModule(fileSpammerModuleClient);
    commandManager.unregisterCommand(fileSpammerCommandClient);
}