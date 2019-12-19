var inputs = document.getElementsByTagName('input');
for(var i=0;i<inputs.length-1;++i){
    inputs[i].onber=inputBlur;

}
function inputBlur(){
    var name = this.name;
    var val=this.value;
    var tips=this.placeholder;
    var tips_obj=this.parentNode.nextElementSibling;
    val =val.trim();
    if(!val){
        error(tips_obj,'输入框不能为空');
        return false;
    }
    var reg_msg=getRegMsg(name,tips);
    if(reg_msg['reg'].test(val)){
        success(tips_obj,reg_msg['msg']['success']);
    }else{
        error(tips_obj, reg_msg['msg']['error']);
        
    }
}
function getRegMsg(name, tips){
    var reg= msg='';
    switch (name){
        case'username':
        reg=/^[a-zA-Z]{4,12}$/;
        msg={'success':'用户名输入正确','error': tips};
        break;
        case 'pwd':
            reg=/^\w{6,20}
    }
}
