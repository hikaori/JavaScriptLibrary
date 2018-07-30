function initial(){
    new Vue({
      el:'#msg',
      data:{
        flg:false
      },
      created:function(){
        this.flg = true;
      }
    });
  }