// Ждем, пока вся страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {

    // Находим нашу форму по её ID
    const eventForm = document.getElementById('create-event-form');

    // Добавляем "слушателя" на событие отправки формы (клик по кнопке)
    eventForm.addEventListener('submit', (event) => {
        
        // Отменяем стандартное поведение браузера (перезагрузку страницы)
        event.preventDefault();

        // Получаем значения из полей формы
        const title = document.getElementById('event-title').value;
        const description = document.getElementById('event-description').value;

        // Выводим красивое сообщение в консоль (откройте Инструменты разработчика в браузере на вкладке Console, чтобы это увидеть)
        console.log("======= Форма отправлена (симуляция) =======");
        console.log("Название события:", title || "не указано");
        console.log("Описание:", description || "не указано");
        console.log("===============================================");
        
        // Показываем пользователю всплывающее сообщение
        alert('Событие создано (симуляция)! В реальном приложении вы бы получили ссылку.');
    });

});