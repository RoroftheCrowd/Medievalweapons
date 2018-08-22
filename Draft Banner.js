(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Draft Banner_atlas_", frames: [[1001,732,799,242],[1001,244,799,242],[1001,488,799,242],[1001,0,799,242],[0,0,999,1081]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.flamesgif_0 = function() {
	this.spriteSheet = ss["Draft Banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flamesgif_1 = function() {
	this.spriteSheet = ss["Draft Banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flamesgif_2 = function() {
	this.spriteSheet = ss["Draft Banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flamesgif_3 = function() {
	this.spriteSheet = ss["Draft Banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.SheildandSword = function() {
	this.spriteSheet = ss["Draft Banner_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flamesgif_gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flamesgif_0();
	this.instance.parent = this;

	this.instance_1 = new lib.flamesgif_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.flamesgif_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.flamesgif_3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,799,242);


// stage content:
(lib.DraftBanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.text = new cjs.Text("Weapons", "96px 'BlackChancery'", "#009933");
	this.text.lineHeight = 116;
	this.text.parent = this;
	this.text.setTransform(800.7,88.8,0.86,0.813);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:722.7},0).wait(1).to({x:644.7},0).wait(1).to({x:566.7},0).wait(1).to({x:488.7},0).wait(26));

	// Layer 3
	this.text_1 = new cjs.Text("Medieval", "96px 'BlackChancery'", "#009933");
	this.text_1.lineHeight = 116;
	this.text_1.parent = this;
	this.text_1.setTransform(-354.9,75.1);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({scaleX:0.98,scaleY:0.94,x:-262.8,y:78.5},0).wait(1).to({scaleX:0.96,scaleY:0.88,x:-170.6,y:81.9},0).wait(1).to({scaleX:0.93,scaleY:0.82,x:-78.4,y:85.2},0).wait(1).to({scaleX:0.91,scaleY:0.76,x:13.8,y:88.6},0).wait(26));

	// Layer 1
	this.instance = new lib.SheildandSword();
	this.instance.parent = this;
	this.instance.setTransform(318,13,0.2,0.2);

	this.instance_1 = new lib.flamesgif_gif();
	this.instance_1.parent = this;
	this.instance_1.setTransform(399.5,121,1,1,0,0,0,399.5,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.6,125,1462.4,242);
// library properties:
lib.properties = {
	width: 799,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Draft Banner_atlas_.png", id:"Draft Banner_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;