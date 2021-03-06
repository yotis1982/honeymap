function set_map_size() {
  $('#world-map').width($(document).width() - 100);
  $('#world-map').height(0.8 * $(document).height());
}

function set_log_size() {
  $('#log').width(0.5 * $(document).width());
  $('#log').css("margin-top", 0.03 * $(document).height());
  $('#log').height(0.15 * $(document).height());
}

$(window).resize(function(){
  set_map_size();
  set_log_size();
});

set_map_size();
set_log_size();
