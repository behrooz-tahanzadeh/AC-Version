Main = 
{	
	dom:false,
		
	init: function()
	{
		this.dom = document.getElementById('dwgGallery');
		this.fr = new FileReader();
	},
	
	onDragOver: function(ev)
	{
		ev.preventDefault();
		document.getElementById("notification").className = "active";
	},
	
	onDrop: function(ev)
	{
		document.getElementById("notification").className = "deactive";
		ev.preventDefault();
		
		Main.dom.innerHTML = "";
		
		for(var i=0; i<ev.dataTransfer.files.length; ++i)
		{
			var reader = new FileReader();
			
			reader.onload = (function(file){
				 return function(e)
				 {
					var text = e.target.result;
					var v = parseInt(text);
					
					if(v<1015)
						Main.print('Lt 98/97', file);
					else if(v<1018)
						Main.print('2000', file);
					else if(v<1021)
						Main.print('2004', file);
					else if(v<1024)
						Main.print('2007', file);
					else if(v<1027)
						Main.print('2010', file);
					else
						Main.print('2013 or later', file);
				 };
			})(ev.dataTransfer.files[i]); 
			
			reader.readAsText(ev.dataTransfer.files[i].slice(2,6));
		}
	},
	
	print: function(str, file)
	{	
		Main.dom.innerHTML += '<div class="v'+str+'">'
			+'<b>'+file.name+'</b><br>'
			+str
			+'</div>';
	}
};//eo Main{}

window.onload = function()
{
	Main.init();
};