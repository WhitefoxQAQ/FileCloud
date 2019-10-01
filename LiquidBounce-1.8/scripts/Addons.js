var scriptName = "Addons";
var scriptAuthor = "Wu_dian";
var scriptVersion = 1.3;


script.import("lib/glFunctions.js");
script.import("lib/systemFunctions.js")

function ExampleModule() {
	var debugValue = value.createBoolean("Debug", false);
	var autoL = value.createBoolean("AutoL", true);
	var targetValue = value.createBoolean("TargetHUD", true);
	var healwarning = value.createBoolean("HealthWarning", true);
    this.getName = function() {
        return "Addons";
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
		//Debug,Code Form Sms_Gamer_3808 
		mc.fontRendererObj.drawStringWithShadow('HP: ' + (mc.thePlayer.getHealth().toFixed(2).toString())+ '  ' , mcWidth/2-15, mcHeight/2-10, 0x7CFC00);
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
		//Health Warning
		if (healwarning.get()){
			if (mc.thePlayer.getHealth() < 8){
				mc.fontRendererObj.drawStringWithShadow('Warning!Your HP is too Low!' + '  ' , mcWidth/2-60, mcHeight/2+10, 0x7CFC00);
			}
		}
		//TargetHUD
			if(targetValue.get()){
			if (target != null) {
					var line = 1;
					var mcHeight = getScaledHeight();
					var mcWidth = getScaledWidth();
					var currenthealth = target.getHealth().toFixed(0);
					var maxhealth = target.getMaxHealth().toFixed(0);
					var hp = mc.thePlayer.getHealth().toFixed(0);
					drawRect(mcWidth/2+85, mcHeight/2-4, mcWidth/2+296 - line, mcHeight/2+76, 0x44000000);//BackGround
					drawRect(mcWidth/2+90, mcHeight/2, mcWidth/2+290, mcHeight/2 + line, 0xBBFFFFFF);//Top Line
					drawRect(mcWidth/2+89, mcHeight/2+71, mcWidth/2+292 - line, mcHeight/2+71 + line, 0xBBFFFFFF);//Bottom Line
					drawRect(mcWidth/2+291 - line, mcHeight/2, mcWidth/2+291, mcHeight/2+71, 0xBBFFFFFF); //Right Line
					drawRect(mcWidth/2+89, mcHeight/2, mcWidth/2+90, mcHeight/2+71, 0xBBFFFFFF); //Left Line
					mc.fontRendererObj.drawStringWithShadow('  Name: ' +target.getName()+' | Dist: ' + target.getDistanceToEntity(mc.thePlayer).toFixed(2) ,  mcWidth/2+91, mcHeight/2+7, 0xFFFFFF);
					mc.fontRendererObj.drawStringWithShadow('  Yaw: ' +target.rotationYaw.toFixed(0)+' | Pitch: '+target.rotationPitch.toFixed(0)+' | BodyYaw: '+target.renderYawOffset.toFixed(0), mcWidth/2+91, mcHeight/2+20, 0xFFFFFF);
					mc.fontRendererObj.drawStringWithShadow('  HP: ' +currenthealth+'/'+maxhealth+ ' | TE: '+target.ticksExisted, mcWidth/2+91, mcHeight/2+32, 0xFFFFFF);
					if ((hp - currenthealth) > 0  ){
					mc.fontRendererObj.drawStringWithShadow('  Combat Predict: '+'You Will Win The Duel!', mcWidth/2+91, mcHeight/2+44, 0x6CC312);
					}
					if ((hp - currenthealth) < 0  ){
					mc.fontRendererObj.drawStringWithShadow('  Combat Predict: '+'You Will Lose The Duel!', mcWidth/2+91, mcHeight/2+44, 0xFF3300);
					}
					if ((hp - currenthealth) == 0  ){
					mc.fontRendererObj.drawStringWithShadow('  Combat Predict: '+'You Will Draw The Duel!', mcWidth/2+91, mcHeight/2+44, 0xFFFF00);
					}
					if(toPercent(currenthealth,maxhealth) >=80){
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+71, 0x8800FF00); 
					}else if(toPercent(currenthealth,maxhealth) >= 60){
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+71, 0x88CCFF66); 
					}else if(toPercent(currenthealth,maxhealth) >= 40){
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+71, 0x88FFFF00); 
					}else if(toPercent(currenthealth,maxhealth) >= 20){
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+71, 0x88FF5500); 
					}else if(toPercent(currenthealth,maxhealth) > 0){
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+(toPercent(currenthealth,maxhealth)*2)+90, mcHeight/2+71, 0x88FF0000); 
					}
					drawRect(mcWidth/2+90, mcHeight/2+58, mcWidth/2+291 - line, mcHeight/2+58 + line, 0xAAFFFFFF);//HP Top Line
					drawRect(mcWidth/2+249, mcHeight/2+58, mcWidth/2+250, mcHeight/2+71, 0x88FFFFFF); //Right Line
					drawRect(mcWidth/2+209, mcHeight/2+58, mcWidth/2+210, mcHeight/2+71, 0x88FFFFFF); //Right Line
					drawRect(mcWidth/2+169, mcHeight/2+58, mcWidth/2+170, mcHeight/2+71, 0x88FFFFFF); //Right Line
					drawRect(mcWidth/2+129, mcHeight/2+58, mcWidth/2+130, mcHeight/2+71, 0x88FFFFFF); //Right Line
					if (target.isDead || target.getDistanceToEntity(mc.thePlayer)> 5.0) {
						//AutoL
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