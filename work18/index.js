function send(){
    let sno = document.getElementById('sno').value
    let name = document.getElementById('name').value
    let content=document.getElementById('content').value
    let xmlhttp;
    if(window.XMLHTTPRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
        
    }
    xmlhttp.open('post','http://139.9.81.203:8089/ajax',true)
    xmlhttp.setRequestHesder("Content-type","application/x-ww-form");
    xmlhttp.send('sno=' +sno+'&name=' +name+"&content="+content)
    xmlhttp.onreadystatechange =function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            let ajaxData=JSON.parse(xmlhttp.responText)
            result=ajaxData.reverse().map((val)=>{return JSON.stringify(val)})
            document.getElementById("result").innerHTML=result.join('<br>');
        }
    }
}