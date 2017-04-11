{
	"use Strict";
	var CSP = "default-src 'self'";
	var header = "http-equiv";
	var enforced = false;
	var tags = document.getElementsByTagName("meta");
	if(tags.length<=0){
	for(var x = 0;x>tags.length;x++ )
	{
		if(tags[x].getAttribute("http-equiv") == "Content Security Policy")
		{
			console.log("CSP Found ending functions")
			emforced = true;
			break;
		}
	}
	}else{ console.log("no metas found");
	if(!enforced)
	{
		console.log("no CSP found adding to page based on preference");
		var meta = document.createElement("META");//todo create tag based on prefrences
		meta.setAttribute("http-equiv", "Content-Security-Policy");
		meta.setAttribute("content",CSP );
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(meta);
	}
	
}
