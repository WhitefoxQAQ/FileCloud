var scriptName = "Debug info";
var scriptAuthor = "Wu_dian";
var scriptVersion = 1.2;
//Recode By Wu_dian
//此JS没有混淆，你可以自己添加自己想添加的Debug项目

script.import("lib/glFunctions.js");
script.import("lib/systemFunctions.js")

function ExampleModule() {
    this.getName = function() {
        return "Debug";
    }
    this.getDescription = function() {
        return "Debug info";
    }
    this.getCategory = function() {
        return "Fun";
    }
	//this.onAttack = function (event) {
    //    target = event.getTargetEntity();
    //}
	
    this.onRender2D = function() {
		var speed = 0;
		var X = 0;
		var Z = 0;
		var X2 = 0;
		var Z2 = 0;
		X = Math.abs(mc.thePlayer.motionX);
        Z = Math.abs(mc.thePlayer.motionZ);
		speed = X + Z;
        var mcHeight = getScaledHeight();
        var mcWidth = getScaledWidth();
		mc.fontRendererObj.drawStringWithShadow('Health: ' + (mc.thePlayer.getHealth().toFixed(2).toString())+ '  ' , 5, mcHeight/2-30, 0xff4212);
        mc.fontRendererObj.drawStringWithShadow("MotionX: " + (mc.thePlayer.motionX.toFixed(5).toString())+ '  ' , 5, mcHeight/2-20, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("MotionY: " + (mc.thePlayer.motionY.toFixed(5).toString())+ '  ' , 5, mcHeight/2-10, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("MotionZ: " + (mc.thePlayer.motionZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("posX: " + (mc.thePlayer.posX.toFixed(5).toString())+ '  ' , 5, mcHeight/2+10, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("posY: " + (mc.thePlayer.posY.toFixed(5).toString())+ '  ' , 5, mcHeight/2+20, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("posZ: " + (mc.thePlayer.posZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2+30, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("Timer: " + (mc.timer.timerSpeed.toFixed(5).toString())+ '  ' , 5, mcHeight/2+40, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("OnGround: " + (mc.thePlayer.onGround)+ '  ' , 5, mcHeight/2+50, 0xff4212);
		mc.fontRendererObj.drawStringWithShadow("Speed: " + (speed.toFixed(5).toString()) + " Motion/tick"+ '  ' , 5, mcHeight/2+60, 0xff4212);
		if (mc.thePlayer.getHealth() < 8){
			mc.fontRendererObj.drawStringWithShadow('警告!您的血量过低!' + '  ' , mcWidth/2-35, mcHeight/2+10, 0xff4212);
		}
		//if (target != null) {
		//	mc.fontRendererObj.drawStringWithShadow('|TargetName: ' +target.getName()+' TargetHealth'+ '|' , mcWidth/2, mcHeight/2-10, 0xff4212);
        //    if (target.isDead) {
        //        target = null
        //    }
        //}
		
		}

    }


var exampleModule = new ExampleModule();
var exampleModuleClient;

function onLoad() {}

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(exampleModule);
}

function onDisable() {
    moduleManager.unregisterModule(exampleModuleClient);
}
//Recode By Wu_dian QQ2319939647