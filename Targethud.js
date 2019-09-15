var scriptName = "TargetHUD";
var scriptAuthor = "Wu_dian";
var scriptVersion = 1.2;
//Recode By Wu_dian
//此JS没有混淆，你可以自己添加自己想添加的Debug项目
script.import("lib/glFunctions.js");
script.import("lib/systemFunctions.js")

function ExampleModule() {
    this.getName = function() {
        return "TargetHUD";
    }
    this.getDescription = function() {
        return "TargetHUD";
    }
    this.getCategory = function() {
        return "Fun";
    }
	
	this.onAttack = function (event) {
        target = event.getTargetEntity();
    }


    this.onRender2D = function () {
		if (target != null) {
			var line = 1;
            var mcHeight = getScaledHeight();
            var mcWidth = getScaledWidth();
            drawRect(mcWidth/2, mcHeight/2 + line, mcWidth/2+200 - line, mcHeight/2+90 - line, 0x7E000000);
			drawRect(mcWidth/2, mcHeight/2, mcWidth/2+200 - line, mcHeight/2 + line, 0xFFFFFFFF);
            drawRect(mcWidth/2, mcHeight/2+90, mcWidth/2+200 - line, mcHeight/2+90 + line, 0xFFFFFFFF);
            drawRect(mcWidth/2+200 - line, mcHeight/2, mcWidth/2+200, mcHeight/2+90, 0xFFFFFFFF); 
            drawRect(mcWidth/2, mcHeight/2, mcWidth/2+1, mcHeight/2+90, 0xFFFFFFFF); 
			mc.fontRendererObj.drawStringWithShadow('Name: ' +target.getName(), mcWidth/2+2, mcHeight/2+2, 0xFF6699);
			if(target.getHealth().toFixed(0) >= 20){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0x99FF00);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+200, mcHeight/2+50, 0xFF99FF00); 
			}
			if(target.getHealth().toFixed(0) ==19){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0x99FF00);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+190, mcHeight/2+50, 0xFF99FF00); 
			}
			if(target.getHealth().toFixed(0) ==18){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCCFF33);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+180, mcHeight/2+50, 0xFFCCFF33); 
			}
			if(target.getHealth().toFixed(0) ==17){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCCFF33);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+170, mcHeight/2+50, 0xFFCCFF33); 
			}
			if(target.getHealth().toFixed(0) ==16){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCCFF66);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+160, mcHeight/2+50, 0xFFCCFF66); 
			}
			if(target.getHealth().toFixed(0) ==15){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCCFF66);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+150, mcHeight/2+50, 0xFFCCFF66); 
			}
			if(target.getHealth().toFixed(0) ==14){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFFFF44);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+140, mcHeight/2+50, 0xFFFFFF44); 
			}
			if(target.getHealth().toFixed(0) ==13){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFFFF99);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+130, mcHeight/2+50, 0xFFFFFF99); 
			}
			if(target.getHealth().toFixed(0) ==12){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFFFF99);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+120, mcHeight/2+50, 0xFFFFFF99); 
			}
			if(target.getHealth().toFixed(0) ==11){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFFCC33);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+110, mcHeight/2+50, 0xFFFFCC33); 
			}
			if(target.getHealth().toFixed(0) ==10){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFFCC33);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+100, mcHeight/2+50, 0xFFFFCC33); 
			}
			if(target.getHealth().toFixed(0) ==9){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFF9933);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+90, mcHeight/2+50, 0xFFFF9933); 
			}
			if(target.getHealth().toFixed(0) ==8){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFF9933);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+80, mcHeight/2+50, 0xFFFF9933); 
			}
			if(target.getHealth().toFixed(0) ==7){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFF6633);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+70, mcHeight/2+50, 0xFFFF6633); 
			}
			if(target.getHealth().toFixed(0) ==6){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xFF6633);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+60, mcHeight/2+50, 0xFFFF6633); 
			}
			if(target.getHealth().toFixed(0) ==5){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCC6633);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+50, mcHeight/2+50, 0xFFCC6633); 
			}
			if(target.getHealth().toFixed(0) ==4){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCC6633);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+40, mcHeight/2+50, 0xFFCC6633); 
			}
			if(target.getHealth().toFixed(0) ==3){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCC3333);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+30, mcHeight/2+50, 0xFFCC3333); 
			}
			if(target.getHealth().toFixed(0) ==2){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0xCC3333);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+20, mcHeight/2+50, 0xFFCC3333); 
			}
			if(target.getHealth().toFixed(0) ==1){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0x990000);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+10, mcHeight/2+50, 0xFF990000); 
			}
			if(target.getHealth().toFixed(0) ==0){
			mc.fontRendererObj.drawStringWithShadow('HP: ' +target.getHealth().toFixed(0), mcWidth/2+2, mcHeight/2+15, 0x990000);
			drawRect(mcWidth/2, mcHeight/2+30, mcWidth/2+0, mcHeight/2+50, 0xFF990000); 
			}
			
            if (target.isDead) {
                target = null
            }
        }

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