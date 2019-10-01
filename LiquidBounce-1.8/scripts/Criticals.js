var scriptName = "Criticzl"; 
var scriptVersion = 1.2; 
var scriptAuthor = "soulplexis,Recode Hypixel Criticals By Wu_dian";

var autoGapple = new AutoGapple(); // it's totally autogapple 
var autoGappleClient;

var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition')
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");

function AutoGapple() {
	var Mode = value.createList("Mode", ["Packet", "Hypixel", "Hop", "Matrix", "Spartan", "Horizon", "Custom"], "Hypixel");
	var MotionY = value.createFloat("CustomMotionY", 0.05, 0.01, 0.42);
	var Delay = value.createInteger("Hypixel Delay",8,0,20);//6或者7，低了回弹高了没啥用，这个Delay是打多少刀进行一次暴击，判定方法是1CPS=一刀，6就是每6CPS进行一次暴击，水影那边CPS建议设置为10,11或10,12

    this.getName = function() {
        return "CustomCriticals";
    };

    this.getDescription = function() {
        return "More critical modes i guess.";
    };

    this.getCategory = function() {
        return "Combat";
    };
	this.onMotion = function() {
	};
	this.onEnable = function(){
		shit = 0;
		target = null;
	}
	var shit = 0;

    this.onAttack = function (event) {
		target = event.getTargetEntity();
		if(mc.thePlayer.onGround) {
		switch(Mode.get()) {
		case "Packet":
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000128, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		break;
		case "Hypixel": 
			chat.print('§7[§bCriticals§7]§dDo Attack');
			//尽量开着Speed打，平地打有点拉回
			chat.print(shit);
			if (!event.getTargetEntity().isDead || !event.getTargetEntity().getDistanceToEntity(mc.thePlayer)> 8.0  ) {
			shit++;
			if(shit == 1) { 
			var crit = new  Array(0.0625, 0.0 , 0.0001 , 0.0);
			var v1 = crit.length;
			var v2 = 0;
	    	while (v2 < v1){
				var offset = crit[v2];
				mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ, false));
				chat.print('§7[§bCriticals§7]§dDo Crit ' + offset);
				++v2;
			}
			}
			if(shit >= Delay.get()) {
				shit = 0;
			} 
			}
		break;
		case "Hop":
			mc.thePlayer.motionY = 0.10;
		break;
		case "Matrix":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.20; //0.05 worked before maybe i was glitched idk
		    }
		break;
		case "Spartan": // seems to work on Spartan on treeAC, every other hit is a critical
		    shit++;
		    if(shit == 1) { 
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.04, mc.thePlayer.posZ, true))
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 10) {
			shit = 0;
		    }
		break;
		case "Horizon": // it also seems to work on treeAC Horizon, maybe Horizon there is different?
		if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000255, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		}
		
		break;
		case "Custom":
			mc.thePlayer.motionY = MotionY.get();
		break;
		}
		}
		this.onMotion = function(){
			if(target.isDead || target.getDistanceToEntity(mc.thePlayer)> 10.0) {
			shit = 0;
		    }
		}
	}
	
	this.onDisable = function() {
		mc.timer.timerSpeed = 1.0;
		shit = 0;
	}
	this.addValues = function(values) {
		values.add(Mode);
		values.add(MotionY);
		values.add(Delay);
    }
}

function onLoad() {
};

function onEnable() {
    autoGappleClient = moduleManager.registerModule(autoGapple);
};

function onDisable() {
    moduleManager.unregisterModule(autoGappleClient);
};