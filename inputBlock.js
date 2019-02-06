function inputBlock(placeholder,id){
	let obj=document.createElement('section');
	obj.id_APP=id;
	obj.classList.add('inputBlock');
	obj.method_to_show=null;
	obj.style.display=null;
	obj.style.opacity=0;
	obj.textarea=document.createElement('textarea');
	obj.checkingArea=document.createElement('div');
	obj.appendChild(obj.checkingArea);
	obj.appendChild(obj.textarea);
	
	
	obj.change_placeholder = function(value){
		if ((value==null)||(value==undefined)){
			this.textarea.placeholder='';
		}else{
			this.textarea.placeholder=placeholder;
		}
		this.resize();
	}
	
	obj.show = function(){
		this.style.display=null;
		this.resize();
		if (this.method_to_show==null){
			this.style.opacity=1;
		}
	}
	
	obj.makeSame_chekingArea=function(){
		let blockInfo=this.textarea.getBoundingClientRect();
		let blockInfo_css=window.getComputedStyle(this.textarea,null);
		for (var i=1; i<blockInfo_css.length;i=i+1){
			if ((blockInfo_css[i]!='display')&&(blockInfo_css[i]!='opacity')&&(blockInfo_css[i]!='position')&&(blockInfo_css[i]!='overflow-y')&&(blockInfo_css[i]!='overflow-x')&&(blockInfo_css[i]!='text-overflow')&&(blockInfo_css[i]!='overflow-wrap')&&(blockInfo_css[i]!='overflow-anchor')&&(blockInfo_css[i]!='height')){
				this.checkingArea.style[blockInfo_css[i]]=blockInfo_css.getPropertyValue(blockInfo_css[i]);
			}
		}
		this.checkingArea.innerHTML=this.textarea.value;
		blockInfo=this.checkingArea.getBoundingClientRect();
		console.log(parseInt(blockInfo_css.getPropertyValue('max-height')));
		if (blockInfo.height<parseInt(blockInfo_css.getPropertyValue('max-height'))){
			this.textarea.style.overflowY='hidden';
			this.checkingArea.style.overflowY='hidden';
			this.textarea.style.height=blockInfo.height+'px';
		}else{
			this.textarea.style.overflowY='auto';
			this.checkingArea.style.overflowY='auto';
		}
	}
	
	obj.resize = function(){
		let blockInfo=this.getBoundingClientRect();
		let blockInfo_css=window.getComputedStyle(this, null);
		blockInfo=this.getBoundingClientRect();
		this.textarea.style.width=blockInfo.width-parseInt(blockInfo_css.getPropertyValue('padding-left'))-parseInt(blockInfo_css.getPropertyValue('padding-right'))+'px';
		this.textarea.style.top=blockInfo.top+parseInt(blockInfo_css.getPropertyValue('padding-top'))+'px';
		this.makeSame_chekingArea();
	}
	
	obj.onkeyup = function(){
		this.makeSame_chekingArea();
	}
	
	
	obj.change_placeholder(placeholder);
	
	return obj;
}
