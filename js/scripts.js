$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();

    var array = [];
    array.push($("#question1").val());
    array.push($("#question2").val());
    array.push($("#question3").val());
    array.push($("#question4").val());
    array.push($("#question5").val());

    console.log(array);

    var array2 = [array[1], array[0], array[2]];

    console.log(array2);

    $("#outputHeader").show();
    $("#outputList").show();
    $("#outputList").append("<li>" + array2[0] + "</li>");
    $("#outputList").append("<li>" + array2[1] + "</li>");
    $("#outputList").append("<li>" + array2[2] + "</li>");
  })
})
