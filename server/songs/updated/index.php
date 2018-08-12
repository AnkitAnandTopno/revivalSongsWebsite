<?php
$update_key = $_GET["updatekey"];
$myfile = fopen("../updateKey.txt","r") or die("Unable to open file!");
$update_key_latest=fread($myfile,filesize("../updateKey.txt"));
fclose($myfile);
  if($update_key==''||$update_key_latest==$update_key){
    echo '{"success": false ,"data": {}}';
  }
  else {
    $myfile = fopen("../teslatrhsuncoekdmnicein283h4hi3b4b5in.txt","r") or die("Unable to open file!");
    $update=fread($myfile,filesize("../teslatrhsuncoekdmnicein283h4hi3b4b5in.txt"));
    fclose($myfile);
    echo '{"success": true, "data": '.$update.', "updateKey": '.$update_key_latest.'}';
  }
 ?>
