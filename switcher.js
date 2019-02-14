function switcher(value,check,id){
	let obj=document.createElement('section');
	obj.id_APP=id;
	obj.classList.add('switcher');
	obj.style.opacity=0;
	obj.style.display='none';
	obj.style['-moz-user-select']='none';
	obj.style['-khtml-user-select']= 'none';
	obj.style['user-select']= 'none';
	obj.style['justify-content']= 'space-between';
	
	obj.method_to_show=null;
	
	obj.insideSelector=document.createElement('section');
	obj.insideSelector.classList.add('text');
	obj.shower=document.createElement('section');
	obj.shower.classList.add('shower');
	obj.shower.kof=0.5;
	obj.appendChild(obj.insideSelector);
	obj.appendChild(obj.shower);
	
	if ((check==undefined)||(check==null)||(check==false)){
		obj.check=false;
	}else{
		obj.check=true;
	}
	
	obj.show = function(){
		if (this.method_to_show==null){
			this.style.display='flex';;
			this.style.opacity=1;
		}
		this.resize();
	}
	
	obj.resize = function(){
		let blockInfo=this.getBoundingClientRect();
		let blockInfo2=window.getComputedStyle(this,null);
		let PT=parseInt(blockInfo2.getPropertyValue('padding-top'));
		let PB=parseInt(blockInfo2.getPropertyValue('padding-bottom'));
		let PL=parseInt(blockInfo2.getPropertyValue('padding-left'));
		let PR=parseInt(blockInfo2.getPropertyValue('padding-right'));
		let showerInfo=window.getComputedStyle(this.shower,null);
		let MaxH=showerInfo.getPropertyValue('max-height');
		let MaxW=showerInfo.getPropertyValue('max-width');
		let height=this.clientHeight-PT-PB;
		if ((MaxH!=null)&&(MaxH!=undefined)&&(MaxH!='none')){
			MaxH=parseInt(MaxH);
			if (height>MaxH){
				height=MaxH;
			}
		}
		if ((MaxW!=null)&&(MaxW!=undefined)&&(MaxH!='none')){
			MaxW=parseInt(MaxW);
			if (height>MaxW){
				height=MaxW;
			}
		}
		if (this.check==false){
			this.shower.style.height=Math.floor(height*this.shower.kof)+'px';
			let changeInHeight=height-parseInt(this.shower.style.height);
			this.shower.style.width=this.shower.style.height;
			this.shower.style.marginTop=changeInHeight/2+'px';
		}else{
			this.shower.style.height=height-1+'px';
			this.shower.style.width=this.shower.style.height;
			this.shower.style.marginTop=0+'px';
			
		}
	}
	
	obj.change_value = function(value){
		if ((value==undefined)||(value==null)){
			this.value=' ';
		}else{
			this.value=value;
		}
		this.insideSelector.innerHTML=this.value;
		this.resize()
	}
	
	obj.changeCheck = function(){
		this.shower.style.transition='0.3s';
		this.insideSelector.style.transition='0.3s';
		if (this.check==false){this.shower.classList.add('checked');this.insideSelector.classList.add('checked');}else{this.shower.classList.remove('checked');this.insideSelector.classList.remove('checked');};
		if(this.check==true){this.check=false;}else{this.check=true;}
		this.resize();
		let obj=this;
		setTimeout(function(){
			obj.shower.style.transition='0s'; 
			obj.insideSelector.style.transition='0s'; 
		},300);
	}
	
	obj.onclick = function(){
		this.changeCheck();
	}
	
	obj.change_value(value);
	return obj
}
