
function field() 
{
	this.map = new Array(15);
	for (var i = 0; i < this.map.length; i++)
		this.map[i] = new Array(32);
	for (var i = 0; i < this.map.length; i++)
		for (var j = 0; j < this.map[i].length; j++)
			if (i == this.map.length - 1 || i == this.map.length - 2)
				this.map[i][j] = 1;
			else
				this.map[i][j] = 0;
	this.map[9][16] = '?';
	this.map[9][20] = 'b';
	this.map[9][21] = '?';
	this.map[9][22] = 'b';
	this.map[9][23] = '?';
	this.map[9][24] = 'b';
	this.map[5][22] = '?';
}

function player(x, y)
{
	this.x = x;
	this.y = y;
}