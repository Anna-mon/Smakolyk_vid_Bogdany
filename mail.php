<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$address = $_POST['user_address'];
$date = $_POST['user_date'];
$texta = $_POST['user_texta'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'amonastyrna@ukr.net';    // логин от почты с которой будут отправляться письма
$mail->Password = 'yEaUw66ItvMoMZrJ';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('amonastyrna@ukr.net');      // от кого будет уходить письмо для пользователя
$mail->addAddress('bananamouse4@gmail.com');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка с сайта заказа тортов';
$mail->Body    = "" . $name . " оставил заявку, телефон: " . $phone . "<br>почта: " . $email . "<br>адрес: " . $address . "<br>дата доставки: " . $date . "<br>комментарий " . $texta ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
