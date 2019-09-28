var scriptName = "Debug info";
var scriptAuthor = "Wu_dian";
var scriptVersion = 1.2;
var NumberFormat = Java.type('java.text.NumberFormat');
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
		mc.fontRendererObj.drawStringWithShadow('Health: ' + (mc.thePlayer.getHealth().toFixed(2).toString())+ '  ' , 5, mcHeight/2-30, 0x7CFC00);
		if (debugValue.get()){
        mc.fontRendererObj.drawStringWithShadow("MotionX: " + (mc.thePlayer.motionX.toFixed(5).toString())+ '  ' , 5, mcHeight/2-20, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("MotionY: " + (mc.thePlayer.motionY.toFixed(5).toString())+ '  ' , 5, mcHeight/2-10, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("MotionZ: " + (mc.thePlayer.motionZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posX: " + (mc.thePlayer.posX.toFixed(5).toString())+ '  ' , 5, mcHeight/2+10, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posY: " + (mc.thePlayer.posY.toFixed(5).toString())+ '  ' , 5, mcHeight/2+20, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("posZ: " + (mc.thePlayer.posZ.toFixed(5).toString())+ '  ' , 5, mcHeight/2+30, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("Timer: " + (mc.timer.timerSpeed.toFixed(5).toString())+ '  ' , 5, mcHeight/2+40, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("OnGround: " + (mc.thePlayer.onGround)+ '  ' , 5, mcHeight/2+50, 0x7CFC00);
		mc.fontRendererObj.drawStringWithShadow("Speed: " + (speed.toFixed(5).toString()) + " Motion/tick"+ '  ' , 5, mcHeight/2+60, 0x7CFC00);
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
            drawRect(mcWidth/2, mcHeight/2 + line, mcWidth/2+200 - line, mcHeight/2+60 - line, 0x7E000000);
			drawRect(mcWidth/2, mcHeight/2, mcWidth/2+200 - line, mcHeight/2 + line, 0xFFFFFFFF);
            drawRect(mcWidth/2, mcHeight/2+60, mcWidth/2+200 - line, mcHeight/2+60 + line, 0xFFFFFFFF);
            drawRect(mcWidth/2+200 - line, mcHeight/2, mcWidth/2+200, mcHeight/2+60, 0xFFFFFFFF); 
            drawRect(mcWidth/2, mcHeight/2, mcWidth/2+1, mcHeight/2+60, 0xFFFFFFFF); 
			mc.fontRendererObj.drawStringWithShadow('Name: ' +target.getName(), mcWidth/2+2, mcHeight/2+2, 0xFFFFFF);
			
			if((toPercent(currenthealth,maxhealth)*2) >= 200 ){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
			}
			if((toPercent(currenthealth,maxhealth)*2) >= 199 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 198 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 197 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 196 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 195 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 194 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 193 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 192 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 191 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 190 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 189 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 188 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 187 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 186 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 185 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 184 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 183 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 182 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 181 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 180 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 179 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 178 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 177 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 176 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 175 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 174 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 173 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 172 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 171 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 170 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 169 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 168 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 167 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 166 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 165 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 164 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 163 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 162 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 161 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 160 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 159 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 158 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 157 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 156 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 155 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 154 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 153 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 152 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 151 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 150 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 149 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 148 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 147 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 146 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 145 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 144 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 143 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 142 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 141 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 140 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 139 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 138 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 137 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 136 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 135 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 134 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 133 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 132 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 131 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 130 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 129 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 128 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 127 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 126 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 125 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 124 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 123 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 122 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 121 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 120 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 119 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 118 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 117 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 116 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 115 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 114 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 113 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 112 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 111 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 110 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 109 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 108 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 107 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 106 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 105 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 104 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 103 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 102 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 101 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 100 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 99 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 98 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 97 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 96 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 95 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 94 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 93 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 92 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 91 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 90 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 89 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 88 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 87 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 86 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 85 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 84 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 83 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 82 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 81 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 80 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 79 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 78 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 77 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 76 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 75 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 74 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 73 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 72 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 71 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 70 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 69 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 68 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 67 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 66 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 65 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 64 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 63 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 62 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 61 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 60 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 59 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 58 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 57 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 56 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 55 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 54 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 53 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 52 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 51 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 50 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 49 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 48 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 47 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 46 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 45 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 44 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 43 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 42 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 41 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 40 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 39 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 38 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 37 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 36 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 35 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 34 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 33 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 32 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 31 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 30 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 29 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 28 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 27 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 26 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 25 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 24 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 23 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 22 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 21 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 20 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 19 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 18 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 17 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 16 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 15 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 14 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 13 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 12 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 11 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 10 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 9 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 8 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 7 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 6 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 5 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 4 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 3 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 2 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 1 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			if((toPercent(currenthealth,maxhealth)*2) >= 0 ){
						mc.fontRendererObj.drawStringWithShadow('HP: ' +currenthealth+'/'+maxhealth, mcWidth/2+2, mcHeight/2+15, 0xFFFFFF);
						drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+(toPercent(currenthealth,maxhealth)*2), mcHeight/2+50, 0xFFFFFFFF); 
						}
			
            if (target.isDead || target.getDistanceToEntity(mc.thePlayer)> 5.0) {
				if(autoL.get()){
					if(target.isDead ){
					mc.thePlayer.sendChatMessage('[MemeBounce] ' + target.getName() + ' L');
					}
				}
                target = null
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