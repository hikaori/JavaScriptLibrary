Vue.component('my-component',{
    props:['message'],
    template:'<p style="border:1px solid #ccc;">data≡{{message}}</p>'
  })
  
  function initial(){
    new Vue({
      el:'#msg',
      data:{
        data:[]
      }
    });
  }