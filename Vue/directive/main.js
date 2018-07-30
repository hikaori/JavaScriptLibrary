Vue.directive('directive',{
    bind: function(){
        this.el.innerHTML ='<p>**bind now**</p>'
    },
    update:function(newValue, oldValue){
        this.el.innerHTML = '<p>' + oldValue + '→' +
        newValue + '</p>';
    },
    unbind:function(){
        this.el.innerHTML = '<p>**unbind**</p>';
    },
});

function initial(){
    new Vue({
        el: '#msg',
        data:{
            val:'',
            message:'this is message!'
        },
        methods:{
            myfunction(){
                this.message = this.val;
            }
        }
    });
}