$(document).on("ready", function() {
  $(".alert").delay(3000).slideUp()
});

$(document).on("click", ".checkbox-options", function () {
  var tops = $("#options").find("input:checkbox");
  var id = $(this).attr("id");
  if(id.indexOf("supervisor") != -1){
    var leader_id = id.replace("supervisor_id", "leader_id");
    if($(this).is(":checked")){
      $("#"+leader_id).removeAttr("disabled");
    }else{
      $("#"+leader_id).attr("checked", false);
      $("#"+leader_id).attr("disabled", true);
    }
  }else{
    for (var i = 0; i < tops.length; i++) {
      if (tops[i].id.indexOf("leader_id") != -1) {
        if($(this).attr("id") != tops[i].id){
          tops[i].checked = false;
        }
      };
    };
  }
});
