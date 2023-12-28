const select = document.getElementById("mySelect");

select.addEventListener("change", function() {
  const selectedOption = select.options[select.selectedIndex];
  const url = selectedOption.value;

  if (url) {
    window.location.href = url;
  }
});

// При изменении выбора опции
select.addEventListener("change", function() {
  const selectedOption = select.options[select.selectedIndex];
  const selectedValue = selectedOption.value;

  // Сохраняем выбранное значение в localStorage
  localStorage.setItem("selectedOption", selectedValue);
});

// При загрузке страницы
window.addEventListener("DOMContentLoaded", function() {
  const selectedValue = localStorage.getItem("selectedOption");

  // Если значение было сохранено, выбираем соответствующую опцию
  if (selectedValue) {
    select.value = selectedValue;
  }
});