function initial(){

    var vm = new Vue({
    el: '#msg',
    data: {
      number: '0'
    },
    computed: {
      result: function () {
        var total = 0;
        for(var i = 0; i <= this.number * 1; i++){
          total += i;
        }
        return total;
      }
    }
  })
  
  }
  