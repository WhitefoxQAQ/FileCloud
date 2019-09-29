var scriptName = "Debug info";
var scriptAuthor = "Wu_dian";
var scriptVersion = 1.2;
var NumberFormat = Java.type('java.text.NumberFormat');
var Gui = Java.type('net.minecraft.client.gui.Gui');
var EnumPlayerModelParts = Java.type('net.minecraft.entity.player.EnumPlayerModelParts');
var NetworkPlayerInfo = Java.type('net.minecraft.client.network.NetworkPlayerInfo');
var List = Java.type('java.util.List');
var Iterator = Java.type('java.util.Iterator');
//Recode By Wu_dian
//此JS没有混淆，你可以自己添加自己想添加的Debug项目

script.import("lib/glFunctions.js");
script.import("lib/systemFunctions.js")

function ExampleModule() {
	var debugValue = value.createBoolean("Debug", false);
	var autoL = value.createBoolean("AutoL", true);
	var targetValue = value.createBoolean("TargetHUD", true);
	var healwarning = value.createBoolean("HealthWarning", true);
    this.getName = function() {
        return "TargetHUD";
    }
    this.getDescription = function() {
        return "A Addons For LiquidBounce";
    }
    this.getCategory = function() {
        return "Fun";
    }
    this.onEnable = function() {
		target = null;
    }
    this.onDisable = function() {

    }
	this.addValues = function(values) {
        values.add(debugValue);
        values.add(targetValue);
        values.add(healwarning);
		values.add(autoL);
    }
	this.onAttack = function (event) {
        target = event.getTargetEntity();
    }
    this.onUpdate = function() {
    }
	
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
		mc.fontRendererObj.drawStringWithShadow('Health: ' + (mc.thePlayer.getHealth().toFixed(2).toString())+ '  ' , 5, mcHeight/2-10, 0x7CFC00);
		if (debugValue.get()){
        mc.fontRendererObj.drawStringWithShadow("MotionX: " + (mc.thePlayer.motionX.toFixed(5).toString())+ '  ' , 5, mcHeight/2, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("MotionY: " + (mc.thePlayer.motionY.toFixed(5).toString())+ '  ' , 5, mcHeight/2+10, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("MotionZ: " + (mc.thePlayer.motionZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2+20, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posX: " + (mc.thePlayer.posX.toFixed(5).toString())+ '  ' , 5, mcHeight/2+30, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posY: " + (mc.thePlayer.posY.toFixed(5).toString())+ '  ' , 5, mcHeight/2+40, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posZ: " + (mc.thePlayer.posZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2+50, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("Timer: " + (mc.timer.timerSpeed.toFixed(5).toString())+ '  ' , 5, mcHeight/2+60, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("OnGround: " + (mc.thePlayer.onGround)+ '  ' , 5, mcHeight/2+70, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("Speed: " + (speed.toFixed(5).toString()) + " Motion/tick"+ '  ' , 5, mcHeight/2+80, 0x7CFC00);
		}
			if (healwarning.get()){
				if (mc.thePlayer.getHealth() < 8){
					mc.fontRendererObj.drawStringWithShadow('警告!您的血量过低!' + '  ' , mcWidth/2-35, mcHeight/2+10, 0x7CFC00);
				}
			}
			if(targetValue.get()){
			if (target != null) {
					var line = 1;
					var mcHeight = getScaledHeight();
					var mcWidth = getScaledWidth();
					var currenthealth = target.getHealth().toFixed(0);
					var maxhealth = target.getMaxHealth().toFixed(0);
					drawRect(mcWidth/2+90, mcHeight/2 + line, mcWidth/2+290 - line, mcHeight/2+60 - line, 0x7E000000);//BackGround
					drawRect(mcWidth/2+90, mcHeight/2, mcWidth/2+290 - line, mcHeight/2 + line, 0xFFFFFFFF);//Top Line
					drawRect(mcWidth/2+90, mcHeight/2+60, mcWidth/2+291 - line, mcHeight/2+60 + line, 0xFFFFFFFF);//Bottom Line
					drawRect(mcWidth/2+290 - line, mcHeight/2, mcWidth/2+290, mcHeight/2+60, 0xFFFFFFFF); //Right Line
					drawRect(mcWidth/2+89, mcHeight/2, mcWidth/2+90, mcHeight/2+61, 0xFFFFFFFF); //Left Line
					mc.fontRendererObj.drawStringWithShadow('Name: ' +target.getName()+' | Dist: ' + target.getDistanceToEntity(mc.thePlayer).toFixed(2) ,  mcWidth/2+91, mcHeight/2+2, 0xFFFFFF);
					mc.fontRendererObj.drawStringWithShadow('Yaw: ' +target.rotationYaw.toFixed(0)+' | Pitch: '+target.rotationPitch.toFixed(0)+' | BodyYaw: '+target.renderYawOffset.toFixed(0), mcWidth/2+91, mcHeight/2+10, 0xFFFFFF);
					mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth+ ' | TickExisted: '+target.ticksExisted, mcWidth/2+91, mcHeight/2+20, 0xFFFFFF);
					if(toPercent(currenthealth,maxhealth) >=80){
					drawRect(mcWidth/2+90, mcHeight/2+35, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+50, 0xFF00FF00); 
					}else if(toPercent(currenthealth,maxhealth) >= 60){
					drawRect(mcWidth/2+90, mcHeight/2+35, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+50, 0xFF339900); 
					}else if(toPercent(currenthealth,maxhealth) >= 40){
					drawRect(mcWidth/2+90, mcHeight/2+35, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+50, 0xFFFFFF00); 
					}else if(toPercent(currenthealth,maxhealth) >= 20){
					drawRect(mcWidth/2+90, mcHeight/2+35, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+50, 0xFFFF5500); 
					}else if(toPercent(currenthealth,maxhealth) > 0){
					drawRect(mcWidth/2+90, mcHeight/2+35, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+50, 0xFFFF0000); 
					}
					if (target.isDead || target.getDistanceToEntity(mc.thePlayer)> 5.0) {
						if(autoL.get()){
							if(target.isDead ){
							mc.thePlayer.sendChatMessage('[MemeBounce] ' + target.getName() + ' L');
							}
						}
						target = null;
					}
				}
			}
		}
}
function toPercent(num, total) { 
    return (Math.round(num / total * 10000) / 100 );
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