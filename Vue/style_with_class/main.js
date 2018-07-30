function initial(){
    
    var vm = new Vue({
        el: '#msg',
        data: {
        isA: true,
        isB: false
        },
        methods: {
        change:function(){
            this.isA = !this.isA;
            this.isB = !this.isB;
        }
        }
    })

}