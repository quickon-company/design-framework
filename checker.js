function checker(value,check,id){
	let obj=document.createElement('section');
	obj.id_APP=id;
	obj.classList.add('checker');
	obj.style.opacity=0;
	obj.style.display='none';
	obj.method_to_show=null;
	obj.insideSelector=document.createElement('section');
	obj.insideSelector.classList.add('text');
	obj.shower=document.createElement('section');
	obj.shower.classList.add('shower');
	obj.appendChild(obj.insideSelector);
	obj.appendChild(obj.shower);
	
	if ((check==undefined)||(check==null)||(check==false)){
		obj.check=false;
	}else{
		obj.check=true;
	}
	
	obj.show = function(){
		if (this.method_to_show==null){
			this.style.display=null;
			this.style.opacity=1;
		}
		obj.resize();
	}
	
	obj.resize = function(){
		const blockInfo=this.getBoundingClientRect();
		if (this.check==false){
			this.shower.style.width=(blockInfo.height/3)+'px';
			this.shower.style.height=(blockInfo.height/3)+'px';
			this.shower.style.top=(blockInfo.top+(blockInfo.height-blockInfo.height/3)/2)+'px';
			this.shower.style.right=(blockInfo.height-blockInfo.height/3)/2+'px';
		}else{
			this.shower.style.width=(blockInfo.height/2)+'px';
			this.shower.style.height=(blockInfo.height/2)+'px';
			this.shower.style.top=(blockInfo.top+blockInfo.height/4)+'px';
			this.shower.style.right=(blockInfo.height/4)+'px';
		}
	}
	
	obj.change_value = function(value){
		if ((value==undefined)||(value==null)){
			this.value='';
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
