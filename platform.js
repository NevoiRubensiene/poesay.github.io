(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BONESclean = function() {
	this.initialize(img.BONESclean);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,724);


(lib.FKLMQV3K6E4MNYWLARGE = function() {
	this.initialize(img.FKLMQV3K6E4MNYWLARGE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,681);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.m_s_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FKLMQV3K6E4MNYWLARGE();
	this.instance.setTransform(326,249,0.3951,0.4496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_s_v, new cjs.Rectangle(326,249,404.6,306.20000000000005), null);


(lib.m_s_h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BONESclean();
	this.instance.setTransform(0,0,0.5052,0.5052);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_s_h, new cjs.Rectangle(0,0,517.3,365.8), null);


(lib.b_u_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("V", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


(lib.b_u_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("O", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,5.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


(lib.b_u_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("A", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,5.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


(lib.b_s_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Vehicular", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(127.5,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AztF0IAArnMAnbAAAIAALng");
	this.shape.setTransform(126.225,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.5,74.3);


(lib.b_s_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Object", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(136.7,9.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AztF0IAArnMAnbAAAIAALng");
	this.shape.setTransform(126.225,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.5,74.3);


(lib.b_s_h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Humanoid", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(124.15,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AztF0IAArnMAnbAAAIAALng");
	this.shape.setTransform(126.225,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.5,74.3);


(lib.b_p_e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Test Existing", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 259;
	this.text.parent = this;
	this.text.setTransform(131.55,7.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AxSF0IAArnMAilAAAIAALng");
	this.shape.setTransform(110.725,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,74.3);


(lib.b_p_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Code Example", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 259;
	this.text.parent = this;
	this.text.setTransform(131.55,7.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AycF0IAArnMAk5AAAIAALng");
	this.shape.setTransform(145.025,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,74.3);


(lib.b_in_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("V", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


(lib.b_in_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("O", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,5.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


(lib.b_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("A", "40px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,5.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AklEXIAAotIJLAAIAAItg");
	this.shape.setTransform(51.575,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,55.7);


// stage content:
(lib.platform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		this.m_s_h.visible = false;
		this.m_s_v.visible = false;
		
		
		this.b_s_h.addEventListener("click", fl_ClickToHide_1.bind(this));
		this.b_s_v.addEventListener("click", fl_ClickToHide_2.bind(this));
		
		function fl_ClickToHide_1() {
			this.m_s_h.visible = true;
			this.m_s_v.visible = false;
		}
		function fl_ClickToHide_2() {
			this.m_s_h.visible = false;
			this.m_s_v.visible = true;
		}
		
		/* Move Horizontally
		Moves the specified symbol instance to the left or right by decreasing or increasing its x property by the specified number of pixels.
		
		Instructions:
		1. This code will move the symbol instance to the right by default.
		2. To move the symbol instance to the left, change the number 100 below to a negative value.
		3. To change the distance the symbol instance moves, change the number 100 below to the number of pixels you want the symbol instance to move.
		*/
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.m_s_h.addEventListener("click", fl_ClickToGoToWebPage_1);
		this.m_s_h.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_1() {
			window.open("https://www.instructables.com/id/BONES-the-Humanoid-Robot/", "_blank");
		}
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.instructables.com/id/Arduino-Bluetooth-RC-Car-2/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Shapes
	this.m_s_v = new lib.m_s_v();
	this.m_s_v.name = "m_s_v";
	this.m_s_v.setTransform(610,360.5,1,1,0,0,0,512,340.5);

	this.m_s_h = new lib.m_s_h();
	this.m_s_h.name = "m_s_h";
	this.m_s_h.setTransform(674.4,421,1,1,0,0,0,258.6,182.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m_s_h},{t:this.m_s_v}]}).wait(1));

	// Buttons
	this.b_p_e = new lib.b_p_e();
	this.b_p_e.name = "b_p_e";
	this.b_p_e.setTransform(520.35,66,1,1,0,0,0,131.6,37.1);
	new cjs.ButtonHelper(this.b_p_e, 0, 1, 1);

	this.b_p_c = new lib.b_p_c();
	this.b_p_c.name = "b_p_c";
	this.b_p_c.setTransform(786.1,66,1,1,0,0,0,131.6,37.1);
	new cjs.ButtonHelper(this.b_p_c, 0, 1, 1);

	this.b_u_o = new lib.b_u_o();
	this.b_u_o.name = "b_u_o";
	this.b_u_o.setTransform(1193.1,466.7,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_u_o, 0, 1, 1);

	this.b_u_v = new lib.b_u_v();
	this.b_u_v.name = "b_u_v";
	this.b_u_v.setTransform(1193.1,384.6,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_u_v, 0, 1, 1);

	this.b_u_a = new lib.b_u_a();
	this.b_u_a.name = "b_u_a";
	this.b_u_a.setTransform(1193.1,293.2,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_u_a, 0, 1, 1);

	this.instance = new lib.b_s_o();
	this.instance.setTransform(916.7,641.05,1,1,0,0,0,126.2,37.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.b_s_v = new lib.b_s_v();
	this.b_s_v.name = "b_s_v";
	this.b_s_v.setTransform(639.6,641.05,1,1,0,0,0,126.2,37.1);
	new cjs.ButtonHelper(this.b_s_v, 0, 1, 1);

	this.b_s_h = new lib.b_s_h();
	this.b_s_h.name = "b_s_h";
	this.b_s_h.setTransform(363.15,641.05,1,1,0,0,0,126.2,37.1);
	new cjs.ButtonHelper(this.b_s_h, 0, 1, 1);

	this.b_in_o = new lib.b_in_o();
	this.b_in_o.name = "b_in_o";
	this.b_in_o.setTransform(82.55,447.6,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_in_o, 0, 1, 1);

	this.b_in_v = new lib.b_in_v();
	this.b_in_v.name = "b_in_v";
	this.b_in_v.setTransform(82.55,365.5,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_in_v, 0, 1, 1);

	this.b_in_a = new lib.b_in_a();
	this.b_in_a.name = "b_in_a";
	this.b_in_a.setTransform(82.55,274.1,1,1,0,0,0,52,27.9);
	new cjs.ButtonHelper(this.b_in_a, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("ADCF0IAArnICiAAIAALngAljF0IAArnIE2AAIAALng");
	this.shape.setTransform(645.8,66.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.b_in_a},{t:this.b_in_v},{t:this.b_in_o},{t:this.b_s_h},{t:this.b_s_v},{t:this.instance},{t:this.b_u_a},{t:this.b_u_v},{t:this.b_u_o},{t:this.b_p_c},{t:this.b_p_e}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(670.6,388.9,574.4999999999999,289.4);
// library properties:
lib.properties = {
	id: 'E9FC02C80F91224EA80AEBA497B9630B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BONESclean.png", id:"BONESclean"},
		{src:"images/FKLMQV3K6E4MNYWLARGE.jpg", id:"FKLMQV3K6E4MNYWLARGE"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E9FC02C80F91224EA80AEBA497B9630B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;