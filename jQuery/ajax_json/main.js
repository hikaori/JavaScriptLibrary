$(function(){
    $('#btn1').click(function(){
        var id= $('#text1').val();
        $.getJSON('data.php',{'id':id},function(response,status,xhr){
            console.log('gotdata')
            var ol = $('<ul></ul>');
            ol.append('<li>名前:' + response.name + '</li>');
            ol.append('<li>メールアドレス:' + response.mail + '</li>');
            ol.append('<li>電話番号:' + response.tel + '</li>');
            //一度＃msg内を空にしてから取得した中身を入れる。
            $('#msg').empty().append(ol);
        });
    });
});