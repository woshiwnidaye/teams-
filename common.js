function loadUrl()
{
	if(num>=1)
	{
		var url="https://ntsastu.s3.ap-southeast-2.amazonaws.com/NTSastu.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
