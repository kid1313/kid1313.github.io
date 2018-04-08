<?php
if(isset($_POST['phone'])&&$_POST['phone']!="")
{ //Проверка отправилось ли наше поля name и не пустые ли они

    $phone = $_POST['phone'];
    $phone = htmlspecialchars($phone);
    $phone = urldecode($phone);
    $phone = trim($phone);
      $message = "Клиент с номером " . $phone . "заказал обратный звонок";
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        require_once "SendMailSmtpClass.php"; // подключаем класс
  
        $mailSMTP = new SendMailSmtpClass('site1982@inbox.ru', 'root4020', 'ssl://smtp.mail.ru', 'site', 465); // создаем экземпляр класса
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
  
// заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: site <site1982@inbox.ru>\r\n"; // от кого письмо !!! тут e-mail, через который происходит авторизация
        $result =  $mailSMTP->send('kid1313@mail.ru', 'Заявка', $message, $headers); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
        if($result === true)
        {
            echo "В ближайшее время наш менеджер свяжется с Вами";
        }
        else
        {
            echo "Запрос не отправлен. Ошибка: " . $result;
        }
}

?>
