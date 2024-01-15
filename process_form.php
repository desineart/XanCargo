<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Замените следующую строку на вашу почту
    $to = "saydullaeff@gmail.com";
    $subject = "Новая заявка с сайта";
    $headers = "From: $email";

    $mail_body = "Имя: $name\n";
    $mail_body .= "Email: $email\n\n";
    $mail_body .= "Сообщение:\n$message";

    if (mail($to, $subject, $mail_body, $headers)) {
        echo "Спасибо! Ваша заявка успешно отправлена.";
    } else {
        echo "Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.";
    }
}
?>
