<div id="dialog" title="Задать вопрос / Вызвать специалиста">

    <form id="order" class="form-horizontal" action="mail.php" method="post">

        <label for="name">Имя</label>

        <input class="form-control" type="text" name="name" id="name" minlength="3" required>

        <label for="email">E-mail</label>

        <input class="form-control" type="text" name="email" id="email" required>

        <label for="phone">Телефон</label>

        <input class="form-control" type="text" name="phone" id="phone" required>
        <br> <br>
        <textarea class="form-control" name="question" id="" cols="30" rows="5"></textarea>

        <input type="submit" value="Отправить" class="mybutton">
    </form>

</div>


<div class="popap_phone">
    <a href="#" class="opener">
        <img src="<?php bloginfo("template_directory");?>/img/phone_logo.png" alt="phone">
    </a>
</div>