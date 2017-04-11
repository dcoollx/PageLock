{
	"use Strict";
	var CSP = "default-src 'self'";
	var header = "http-equiv";
	var enforced = false;
	var tags = document.getElementsByTagName("meta");
	for(var x = 0;x>tags.length;x++ )
	{
		if(tags[x].getAttribute("http-equiv") == "Content Security Policy")
		{
			console.log("CSP Found ending functions")
			emforced = true;
			break;
		}
	}
	if(!enforced)
	{
		console.log("no CSP found adding to page based on preference");
		var meta = document.createElement("META");
		meta.attributes
	}
	
}