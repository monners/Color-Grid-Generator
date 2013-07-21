/**
*-------------------------
* MAIN vendor javascript file
*-------------------------
**/


var ColorGen = function ColorGen() {}

ColorGen.prototype = {};

ColorGen.prototype.settings = {
	gridContainer	: 'gridContainer',
	xSquareCount	: 50,
	ySquareCount	: 50,
	xLength			: 500,
	yLength			: 500,
	gridArr			: []
};

ColorGen.prototype.totalSquares = function() {
	return (this.settings.xSquareCount * this.settings.ySquareCount);
};

ColorGen.prototype.squareDim = function(length, count) {
	return Math.round(length / count);
};

ColorGen.prototype.hueStep = function() {
	return (360/this.totalSquares());
};

ColorGen.prototype.populateGrid = function() {
	var width = this.squareDim(this.settings.xLength, this.settings.xSquareCount),
		height = this.squareDim(this.settings.yLength, this.settings.ySquareCount);

	for(var i=0, k = this.settings.xSquareCount * this.settings.ySquareCount; i < k; i++ ) {
		var square = document.createElement('DIV');
		
		square.setAttribute("style", "background: hsla("+(Math.round(this.hueStep() * i))+", 100%, 50%, 1.0); width: "+width+"px; height: "+height+"px; display: inline-block; position: relative;");

		this.settings.gridArr.push(square);
	}

};

ColorGen.prototype.setGridContainer = function() {
	document.getElementById(this.settings.gridContainer).setAttribute('style', 'width: '+this.settings.xLength+'px; height: '+this.settings.yLength+'px; position: relative; overflow: hidden;');
}

ColorGen.prototype.appendGrid = function() {
	var gridSquares = this.settings.gridArr;

	for(square in gridSquares) {
		if (document.getElementById(this.settings.gridContainer) !== null) {
			document.getElementById(this.settings.gridContainer).appendChild(gridSquares[square]);
		}
	}
}

var colorgen = new ColorGen();
