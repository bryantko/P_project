function animate(obj,target,callback){
    // 性能优化问题，每使用var就会创建一个新的空间，考虑给对象加值
    clearInterval(obj.timer);
    // 缓动公式目标值-现在的位置/10
   
    obj.timer=setInterval(function(){
        var step=Math.ceil((target-obj.offsetLeft)/10); 
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
            // if(callback){
            //     callback();
            // }
            callback && callback()
        }
        obj.style.left = obj.offsetLeft+step+'px';
    },15)

}