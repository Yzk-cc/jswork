function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total)&&Number(total)
    kick  = parseInt(kick )&&Number(kick )
    if (isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for(let i =1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while(monkey.length>1){
        i++;
        head=monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText =monkey[0]
    
}
function stat(){
    let str = document.getElementById("str").value
    let obj = str.split("").sort()
    let num = obj.reduce(function (allnum,obj){
        if(obj in allnum){
            allnum[obj]++;
        }
        else{
            allnum[obj]=1;
        }
        return allnum;
    },{});

    document.getElementById('result').innerText = JSON.stringify(num)
}
/*var str="asdsfafafaf";
function stat(str){
    var obj={};
    for(var i=0;i<str.length;i++){
        var key=str[i];
        if(obj[key]){
            obj[key]++;
        }else{
            obj[key]=1;
        }
    }
   var arr =Object.keys(obj);
   for (var i=0;i<arr.length;i++){
    console.log(arr[i]+'出现的次数：'+obj[arr[i]])
   }
  console.log(arr[i]+'出现的次数：'+obj[arr[i]])
}
stat(str)*/