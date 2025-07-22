function loadUrl()
{
	if(num>=1)
	{
		var url="https://samtens1.s3.ap-southeast-2.amazonaws.com/SAMTens.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
