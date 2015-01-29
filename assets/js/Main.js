Main = 
{
	dom:false,
		
	init: function()
	{
		this.dom = document.getElementById('dragZone');
	},

	onDragOver: function(ev)
	{
		ev.preventDefault();
	},
	
	onDrop: function(ev)
	{
		ev.preventDefault();
		
		var reader = new FileReader();
			
		reader.onload = function(e)
		{
			var text = e.target.result;
			var v = parseInt(text);
			
			console.log(v);
			
			if(v<1015)
				Main.print('Lt 98/97');
			else if(v<1018)
				Main.print('2000');
			else if(v<1021)
				Main.print('2004');
			else if(v<1024)
				Main.print('2007');
			else if(v<1027)
				Main.print('2010');
			else
				Main.print('2013 or later');
		};
		
		reader.readAsText(ev.dataTransfer.files[0].slice(2,6));
	},
	
	print: function(str)
	{
		console.log(str);
		
		Main.dom.innerHTML = str;
	}
};//eo Main{}

window.onload = function()
{
	Main.init();
};