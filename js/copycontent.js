// JavaScript Document


// select and copy
    function copyContent(el,btn) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");
			

        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
		
		
		//window.getSelection().removeAllRanges()

		if(btn==1){
			document.getElementById("msg-copied").style.display = "inline";
			document.getElementById("msg-copied").style.animation =  '0.4s ease-out 0s 1 fadeIn';
		
		}else{

			document.getElementById("msg-copied2").style.display = "inline";
			document.getElementById("msg-copied2").style.animation =  '0.4s ease-out 0s 1 fadeIn';
		}
		
		
    }
