<?php
include 'settings/connect.php';


if (isset($_GET['stake'])){
  if (isset($_POST['staking'],$_POST['day'],$_POST['mouth'],$_POST['halfyear'],$_POST['wallet'])){
    $inf = mysqli_query($link, "SELECT count(*) FROM `stake` WHERE `wallet`='$wallet'");
    $ass = mysqli_fetch_array($inf);
    $stake = $_POST['staking'];//summa prihoda
    $day = $_POST['day'];//dayly prof
    $mouth = $_POST['mouth'];
    $halfyear = $_POST['halfyear'];
    $wallet = $_POST['wallet'];//ego koshelek
    $dailyprofit = $_POST['dailyprofit'];
    $autoinvest = $_POST['autoinvest'];
    if ($ass[0] > 0){
      $inf = mysqli_query($link, "SELECT * FROM `stake` WHERE `wallet`='$wallet'");
      $ass = mysqli_fetch_assoc($inf);
      $mail = $ass['mail'];
      $tg = $ass['chatidtg'];
      $chatid = $ass['chatid'];
      if ($stake < $ass['staking']){
          echo 'false';
         die();
      }
      if ($stake > 5){
           mysqli_query($link, "UPDATE `stake` SET `staking`='$staking', `day`='$day', `mouth`='$mouth', `halfyear`='$halfyear', `wallet`='$wallet' , `mail`='$mail', `chatidtg`='$tg',`dailyprofit`='$dailyprofit',`autoinvest`='$autoinvest' WHERE `id`='$id'");
      }
      else{
           mysqli_query($link, "UPDATE `stake` SET `staking`='$staking', `day`='$day', `mouth`='$mouth', `halfyear`='$halfyear', `wallet`='$wallet',`dailyprofit`='$dailyprofit',`autoinvest`='$autoinvest' WHERE `id`='$id'");
      }
    }else{
        if($stake > 5){
      mysqli_query($link, "INSERT INTO `stake` (`staking`, `day`, `mouth`, `halfyear`, `wallet`,`dailyprofit`,`mail`, `chatidtg`) VALUES ('$stake','$day','$mouth','$halfyear','$wallet','$dailyprofit','$mail','$tg')");
    }
    else{
         mysqli_query($link, "INSERT INTO `stake` (`staking`, `day`, `mouth`, `halfyear`, `wallet`,`dailyprofit`) VALUES ('$stake','$day','$mouth','$halfyear','$wallet','$dailyprofit')");
    }
    }
    echo 'Заебись!';
    $name = 'wallet'; //имя куки
    $value = $wallet; //значение куки
    $expire = time()+60*60*24*30*12; //сколько будет кука работать (1 день в секундах)
    setcookie($name,$value,$expire);
  }
}

if (isset($_GET['mybalance'])){
  if (isset($_POST['wallet'])){
    $wallet = $_POST['wallet'];
    $inf = mysqli_query($link, "SELECT * FROM `stake` WHERE `wallet`='$wallet'");
    $sum = 0;
    while ($ass = mysqli_fetch_assoc($inf)){
      $sum = $sum + $ass['staking'];
    }
  }
  echo $sum;
}

if (isset($_GET['premium'])){
  if (isset($_POST['wallet'],$_POST['mail'],$_POST['telegram'])){
    $wallet = $_POST['wallet'];
    $mail = $_POST['mail'];
    $telegram = $_POST['telegram'];
    mysqli_query($link, "UPDATE `stake` SET `mail`='$mail',`chatidtg`='$telegram' WHERE `wallet`='$wallet'");
    echo 'true';
  }
}

if (isset($_GET['last'])){
  $inf = mysqli_query($link, "SELECT * FROM `stake` ORDER BY `stake`.`id` DESC LIMIT 10");

echo "

<table class='table'>
<thead>
<tr>
  <th scope='col' class='px-2'>Data</th>
  <th scope='col' class='px-2'>From</th>
  <th scope='col' class='px-2'>To</th>
  <th scope='col' class='px-2'>Amount</th>
</tr>
</thead>
  <tbody>";
    while ($ass = mysqli_fetch_assoc($inf)){
      $date = explode(' ',$ass['date']);
      $from = '0x278a022f6bfcd41dbad0fe0133cb5702c07f28d1';//$ass['wallet'];
      $to = '0x278a022f6bfcd41dbad0fe0133cb5702c07f28d1';
      $lenfrom = count($from);
      $fi = mb_strcut($from, 0, 4);
      $shs = $lenfrom - 7;
      $fa = mb_strcut($from, $lenfrom - 4, 4);
      $from = $fi.'...'.$fa;

      $lenfrom = count($to);
      $fi = mb_strcut($to, 0, 4);
      $fa = mb_strcut($to, $lenfrom - 4, 4);
      $to = $fi.'...'.$fa;
      $amount = $ass['staking'];
      echo "
      <tr>
      <th scope='row' class='px-2'>$date[0]</th>
      <td class='px-2'>$from</td>
      <td class='px-2'>$to</td>
      <td class='px-2'>$amount</td>
    </tr>
            ";
    }
    echo "  </tbody>
    </table>";
}
if (isset($_GET['autoinvest'])){
     $wallet = $_POST['wallet'];//ego koshelek
    $autoin = mysqli_query($link,"UPDATE `stake` SET `autoinvest` = '1' WHERE `wallet`='$wallet'");
}
if (isset($_GET['investstatus'])){
     $wallet = $_POST['wallet'];
     $kal = mysqli_query($link,"SELECT * from `stake` WHERE `wallet`='$wallet'");
     $kal2 = mysqli_fetch_assoc($kal);
     echo $kal2['autoinvest'];
}
if (isset($_GET['updateprofit'])){
    
$temp = mysqli_query($link,"SELECT * from `stake` WHERE `staking` > '0'");
while ($temp2 = mysqli_fetch_assoc($temp)){
    if ($temp2['autoinvest'] == 1){
 $id = $temp2['id'];
 $dailyprofit = $temp2['dailyprofit'];
    mysqli_query($link, "UPDATE `stake` SET `summa`=`summa`+'$dailyprofit' WHERE `id`='$id'");
}
}
}

?>