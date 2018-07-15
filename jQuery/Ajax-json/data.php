<?php
$data = array(
  array('name'=>'Taro','mail'=>'taro@yamada','tel'=>'090-999-999'),
  array('name'=>'kaori','mail'=>'kaori@hirata','tel'=>'090-888-888'),
  array('name'=>'Mika','mail'=>'mika@uchida','tel'=>'090-777-777'),
);

$id = $_GET['id'] * 1;
if($id < count($data)){
  $result = $data[$id];
}else{
  $result = $data[0];
}
header('Content-type:application/json; charset=utf8');
echo json_encode($result);
?>
