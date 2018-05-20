$( ".event-type-select" ).change(function() {
  var selectedEventType = this.options[this.selectedIndex].value;
  if (selectedEventType == "all") {
    $('.cont div').removeClass('hidden');
  } else {
    $('.cont div').addClass('hidden');
    $('.cont div[data-eventtype="' + selectedEventType + '"]').removeClass('hidden');
  }
});