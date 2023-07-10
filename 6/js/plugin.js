(function ($){
  $.fn.treeview = function () {
    // Добавляем обработчик клика на элементы списка
    $(this).find('li').click(function (event) {
      event.stopPropagation(); // Предотвращаем сворачивание списка при клике на дочерний элемент

      var children = $(this).children('ul'); // Получаем все дочерние элементы ul текущего li

      if (children.length > 0) { // Если есть дочерние элементы ul
        children.toggle(); // Раскрываем или сворачиваем их

        $(this).toggleClass('active'); // Заменяем знак "+" на "-" и наоборот только для текущего li

        if ($(this).hasClass('active')) {
          children.find('.treeview li.active').removeClass('active');
          children.find('.treeview ul:visible').toggle();
        }

      } else {
        $(this).removeClass('active');
      }
    });

    return this;
  };
})(jQuery);