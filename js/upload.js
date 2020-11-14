      /*
*送信ボタン押下時のキーワード
*
*/


document.getElementById("submit").onclick = function(){
var text = document.getElementById("code").value;
	if(text =="ちかいのキス" ){	
		alert("正解");
	    window.location.href = 'https://sites.google.com/view/happy-wedding-last/%E3%83%9B%E3%83%BC%E3%83%A0'; 
		
	}else{
	    alert("何も起きないようだ");
	}


}