function inputBlock(value,placeholder,id){
	obj=document.createElement('div');
	obj.id_APP=id;
	obj.classList.add('inputBlock');
	obj.style.display='none';
	obj.style.opacity=0;
	
	
	obj.checkingArea=document.createElement('div');
	obj.textarea=document.createElement('textarea');
	
	obj.textarea.classList.add('textarea');
	obj.checkingArea.classList.add('checkingArea');
	obj.appendChild(obj.checkingArea);
	obj.appendChild(obj.textarea);
	
	
	obj.show = function(){
		if (this.method_to_show==null){
			this.style.display=null;
			this.style.opacity=1;
		}

		this.resize();
	}
	
	obj.resize = function(){
		this.textarea.style.top=-this.checkingArea.clientHeight+'px';
	}
	
	obj.textarea.placeholder=placeholder;
	obj.textarea.value=value;
	return obj;
}