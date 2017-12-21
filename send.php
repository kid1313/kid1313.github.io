<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!=""))
{ //Проверка отправилось ли наше поля name и не пустые ли они

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date']; 
    $time = $_POST['time'];
    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $date = htmlspecialchars($date);
    $time = htmlspecialchars($time);
    $name = urldecode($name);
    $phone = urldecode($phone);
    $date = urldecode($date);
    $time = urldecode($time);
    $name = trim($name);
    $phone = trim($phone);
    $date = trim($date);
    $time = trim($time);
      $message = "Имя: " . $name . "<br/> Телефон: " . $phone . "<br/> Дата: " . $date . "<br/> Время: " . $time;
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
            echo "Письмо успешно отправлено";
        }
        else
        {
            echo "Письмо не отправлено. Ошибка: " . $result;
        }
}

?>
