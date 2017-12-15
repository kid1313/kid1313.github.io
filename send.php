<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 
    //Проверка отправилось ли наше поля name и не пустые ли они
    require_once "SendMailSmtpClass.php"; // подключаем класс
  
    $mailSMTP = new SendMailSmtpClass('site1982@inbox.ru', 'root4020', 'ssl://smtp.mail.ru', 'site', 465); // создаем экземпляр класса
    // $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
    $message = '
                <html>
                    <head>
                        <title>Форма заявки</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Дата: '.$_POST['date'].'</p>
                        <p>Время: '.$_POST['time'].'</p>                        
                    </body>
                </html>'; //Текст нащего соо
    // заголовок письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: site <site1982@inbox.ru>\r\n"; // от кого письмо !!! тут e-mail, через который происходит авторизация
    $result =  $mailSMTP->send('kid1313@mail.ru', 'Форма сайта', $massage, $headers); // отправляем письмо
    // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
    if($result === true){
        echo "Письмо успешно отправлено";
    }else{
        echo "Письмо не отправлено. Ошибка: " . $result;
}
?>