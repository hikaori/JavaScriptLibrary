// loadによるデータ取得。
// $(function(){
//   $('#btn1').click(function(){
//     $('#msg').load("data.txt");
//   });
// });

// getによるデータ取得：loadよりも少し賢いget。
$(function(){
  $('#btn1').click(function(){
    // $.get() ：$は省略形だけでなくオブジェクトでもありget()という jquery　のメソッドを直接呼ぶこともできる。
    $.get('data.txt',function(response, status,xhr){
      var ol = $('<ol></ol>');
      var arr = response.split('\n');
      for(var item in arr){
        ol.append('<li>' + arr[item] + '</li>')
      }
      $('#msg').append(ol);
    });
  });
});
