$(document).ready(function() {
  let $block = null;

  $("[column-data]").click(function() {
    if ($block) {
      $(this).prepend($block);
      $block = null;
    } else {
      $block = $(this)
        .children()
        .first()
        .detach();
    }
  });
});
