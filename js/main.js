/*
*送信ボタン押下時のキーワード
*
*/


document.getElementById("submit").onclick = function(){
var text = document.getElementById("code").value;
	if(text =="500" ){	
		alert("ツールが起動した");
	    window.location.href = './main/'; 
	}else if(text =="123"){	
	     alert("故障したツールが起動した。
	            読み取り自体はできるようだ。");
	    window.location.href = './niam/'; 
		
	}else{
	    alert("何も起きないようだ");
	}


}