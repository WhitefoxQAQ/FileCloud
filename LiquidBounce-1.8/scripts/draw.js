var scriptName = "Draw Rect";
var scriptVersion = 1.0;
var scriptAuthor = "CCBlueX";


// Part of https://github.com/CCBlueX/LiquidBounce-ScriptAPI/tree/master/lib
script.import("lib/glFunctions.js");

function Rect() {

    this.getName = function () {
        return "DrawRect";
    };

    this.getDescription = function () {
        return "Draws a rectangle on the screen.";
    };

    this.getCategory = function () {
        return "Misc";
    };

    this.onRender2D = function () {
        if (mc.ingameGUI.getChatGUI().getChatOpen() == false) {
			var thicc = 2;
            var mcHeight = getScaledHeight();
            var mcWidth = getScaledWidth();
            var mcPOSX = parseInt(mc.thePlayer.posX);
            var mcPOSY = parseInt(mc.thePlayer.posY);
            var mcPOSZ = parseInt(mc.thePlayer.posZ);
            var borderColorComplete = '0x' + borderOpacity + borderColor;
            drawRect(thicc, mcHeight - 23 + thicc, mcWidth - thicc, mcHeight - thicc, 0x7E000000); //innerRect
            
            drawRect(thicc, mcHeight - thicc, mcWidth - thicc, mcHeight, borderColorComplete); //bottomRect
            drawRect(thicc, mcHeight - 23, mcWidth - thicc, mcHeight - 23 + thicc, borderColorComplete); //topRect
            
            drawRect(0, mcHeight - 23, thicc, mcHeight, borderColorComplete); //leftRect
            drawRect(mcWidth - thicc, mcHeight - 23, mcWidth, mcHeight, borderColorComplete); //rightRect


            mc.fontRendererObj.drawStringWithShadow('PosX: ' + mcPOSX + '  PosY: ' + mcPOSY + '  PosZ: ' + mcPOSZ, 4, mcHeight - 11, 0xf7f7f7);
            mc.fontRendererObj.drawStringWithShadow('Name: ' + mc.getSession().getUsername() + '  ' , 4, mcHeight - 20, 0xf7f7f7);
            var d = new Date();
            var month = d.getMonth() + 1

            var datestringEU = 'Date: ' + ('0' + d.getDate()).slice(-2) + '/' + ('0' + month).slice(-2) + '/' + d.getFullYear();

            mc.fontRendererObj.drawStringWithShadow(datestringEU, mcWidth - 90  , mcHeight - 11, 0xf7f7f7);
            var timestring= 'Time: ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
            mc.fontRendererObj.drawStringWithShadow(timestring, mcWidth - 90  , mcHeight - 20, 0xf7f7f7);
            
        }

    }
}

var rect = new Rect();

var rectClient;

function onLoad() {

};

function onEnable() {
    rectClient = moduleManager.registerModule(rect);
};

function onDisable() {
    moduleManager.unregisterModule(rectClient);
};