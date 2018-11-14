<?php


$base_url = 'https://slack.com/api/chat.postMessage';
$tag = 'PHP';

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $base_url.'?token= &channel=%23general&username=Naotohatakeyama&text=++++++++++++++++name+%3D+f++++++++++++++++mail+%3D+f++++++++++++++++content+%3D+f');
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 証明書の検証を行わない
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  // curl_execの結果を文字列で返す

/*
一括で指定することもできる
$option = [
    CURLOPT_URL => $base_url.'/api/v2/tags/'.$tag.'/items',
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_SSL_VERIFYPEER => false,
];
curl_setopt_array($curl, $option);
*/

$response = curl_exec($curl);
$result = json_decode($response, true);

curl_close($curl);

echo "Hello World!";


?>
