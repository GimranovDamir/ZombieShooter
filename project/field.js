
function field() 
{
	this.map = new Array(15);
	for (var i = 0; i < this.map.length; i++)
		this.map[i] = new Array(212);
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
		this.map[13][70] = 0;
		this.map[14][70] = 0;
		this.map[13][69] = 0;
		this.map[14][69] = 0;
			this.map[13][86] = 0;
			this.map[14][86] = 0;
			this.map[13][87] = 0;
			this.map[14][87] = 0;
			this.map[13][88] = 0;
			this.map[14][88] = 0;
				this.map[13][153] = 0;
				this.map[14][153] = 0;
				this.map[13][154] = 0;
				this.map[14][154] = 0;
	this.map[11][28] = 'gt1';
	this.map[12][28] = 't1';
	this.map[11][29] = 'gt2';
	this.map[12][29] = 't2';
		this.map[10][38] = 'gt1';
		this.map[12][38] = 't1';
		this.map[10][39] = 'gt2';
		this.map[12][39] = 't2';
		this.map[11][38] = 't1';
		this.map[11][39] = 't2';
	this.map[9][46] = 'gt1';
	this.map[12][46] = 't1';
	this.map[9][47] = 'gt2';
	this.map[12][47] = 't2';
	this.map[11][46] = 't1';
	this.map[11][47] = 't2';
	this.map[10][46] = 't1';
	this.map[10][47] = 't2';
		this.map[9][57] = 'gt1';
		this.map[12][57] = 't1';
		this.map[9][58] = 'gt2';
		this.map[12][58] = 't2';
		this.map[11][57] = 't1';
		this.map[11][58] = 't2';
		this.map[10][57] = 't1';
		this.map[10][58] = 't2';
	this.map[9][77] = 'b';
	this.map[9][78] = '?';
	this.map[9][79] = 'b';
		this.map[5][80] = 'b';
		this.map[5][81] = 'b';
		this.map[5][82] = 'b';
		this.map[5][83] = 'b';
		this.map[5][84] = 'b';
		this.map[5][85] = 'b';
		this.map[5][86] = 'b';
		this.map[5][87] = 'b';
	this.map[5][91] = 'b';
	this.map[5][92] = 'b';
	this.map[5][93] = 'b';
	this.map[5][94] = '?';
		this.map[9][94] = 'b';
	this.map[9][100] = 'b';
	this.map[9][101] = 'b';
		this.map[9][106] = '?';
		this.map[9][109] = '?';
		this.map[9][112] = '?';
		this.map[5][109] = '?';
	this.map[9][118] = 'b';
		this.map[5][121] = 'b';
		this.map[5][122] = 'b';
		this.map[5][123] = 'b';
	this.map[5][128] = 'b';
	this.map[5][129] = '?';
	this.map[5][130] = '?';
	this.map[5][131] = 'b';
		this.map[9][129] = 'b';
		this.map[9][130] = 'b';
	this.map[12][134] = 's';
	this.map[12][135] = 's';
	this.map[12][136] = 's';
	this.map[12][137] = 's';
	this.map[11][135] = 's';
	this.map[11][136] = 's';
	this.map[11][137] = 's';
	this.map[10][136] = 's';
	this.map[10][137] = 's';
	this.map[9][137] = 's';
		this.map[12][143] = 's';
		this.map[12][142] = 's';
		this.map[12][141] = 's';
		this.map[12][140] = 's';
		this.map[11][140] = 's';
		this.map[11][141] = 's';
		this.map[11][142] = 's';
		this.map[10][140] = 's';
		this.map[10][141] = 's';
		this.map[9][140] = 's';
	this.map[12][148] = 's';
	this.map[12][149] = 's';
	this.map[12][150] = 's';
	this.map[12][151] = 's';
	this.map[11][149] = 's';
	this.map[11][150] = 's';
	this.map[11][151] = 's';
	this.map[10][150] = 's';
	this.map[10][151] = 's';
	this.map[9][151] = 's';
	this.map[9][152] = 's';
	this.map[10][152] = 's';
	this.map[11][152] = 's';
	this.map[12][152] = 's';
		this.map[12][155] = 's';
		this.map[12][156] = 's';
		this.map[12][157] = 's';
		this.map[12][158] = 's';
		this.map[11][155] = 's';
		this.map[11][156] = 's';
		this.map[11][157] = 's';
		this.map[10][155] = 's';
		this.map[10][156] = 's';
		this.map[9][155] = 's';
	this.map[11][163] = 'gt1';
	this.map[12][163] = 't1';
	this.map[11][164] = 'gt2';
	this.map[12][164] = 't2';
		this.map[9][168] = 'b';
		this.map[9][169] = 'b';
		this.map[9][170] = '?';
		this.map[9][171] = 'b';
	this.map[11][179] = 'gt1';
	this.map[12][179] = 't1';
	this.map[11][180] = 'gt2';
	this.map[12][180] = 't2';

}

function player(x, y)
{
	this.x = x;
	this.y = y;
}