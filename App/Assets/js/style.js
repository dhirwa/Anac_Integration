/*Aplicant Part*/
/*Hide and SHow Page*/
/*Suivant*/
 $(document).ready(function(){
    $("#button1").click(function(e){
       event.preventDefault();
      $("#formulaire1").hide();
       $("#formulaire2").show();
    });
    $("#button2-next").click(function(e){
         event.preventDefault();
        $("#formulaire2").hide();
         $("#formulaire3").show();
    });
    $("#button3-next").click(function(e){
         event.preventDefault();
        $("#formulaire3").hide();
         $("#formulaire4").show();
    });
    $("#button4-next").click(function(e){
         event.preventDefault();
        $("#formulaire4").hide();
         $("#formulaire5").show();
    });
    $("#button5-next").click(function(e){
         event.preventDefault();
        $("#formulaire5").hide();
         $("#formulaire6").show();
    });
    $("#sauvegarder").click(function(e){
         event.preventDefault();
        $(".anac-background,.profile-name").hide();
         $("#table-display").show();
    });
    $("#envoyer").click(function(e){
         event.preventDefault();
        $(".table-responsive").hide();
         $("#successfull-saved").show();
    });

 });


 /*Hide and Show*/
 /*Precedent*/
 $(document).ready(function(){
    $("#button2-preview").click(function(e){
       event.preventDefault();
      $("#formulaire2").hide();
       $("#formulaire1").show();
    });
    $("#button3-preview").click(function(e){
         event.preventDefault();
        $("#formulaire3").hide();
         $("#formulaire2").show();
    });
    // $("#button4-preview").click(function(e){
    //      event.preventDefault();
    //     $("#formulaire4").hide();
    //      $("#formulaire3").show();
    // });
    $("#button5-preview").click(function(e){
         event.preventDefault();
        $("#formulaire5").hide();
         $("#formulaire4").show();
    });
    $("#button6-preview").click(function(e){
         event.preventDefault();
        $("#formulaire4").hide();
         $("#formulaire3").show();
    });
    $("#sauvegarder").click(function(e){
         event.preventDefault();
        $(".anac-background").hide();
         $("#table-display").show();
    });
    $("#envoyer").click(function(e){
         event.preventDefault();
        $(".table-responsive").hide();
         $("#successfull-saved").show();
    });
 });


  /*Admin Part*/
  /*Suivant*/
  $(document).ready(function(){
     $("#button-admin1-next").click(function(e){
        event.preventDefault();
       $("#formulaire-admin1").hide();
        $("#formulaire-admin2").show();
     });

     $("#button-admin2-next").click(function(e){
        event.preventDefault();
       $("#formulaire-admin2").hide();
        $("#formulaire-admin3").show();
     });
     $("#button-admin3-next").click(function(e){
        event.preventDefault();
       $("#formulaire-admin3").hide();
        $("#formulaire-admin4").show();
     });
     $("#button-admin4-next").click(function(e){
        event.preventDefault();
       $("#formulaire-admin4").hide();
        $("#formulaire-admin5").show();
     });
     $("#button-admin5-next").click(function(e){
        event.preventDefault();
       $("#formulaire-admin5").hide();
        $("#formulaire-admin6").show();
     });

     $("#sauvegarder2").click(function(e){
        event.preventDefault();
       $("#formulaire-admin6,#table-display-admin").hide();
        $("#formulaire-admin7,.anac-background-admin").show();
     });
       /*Precedent*/
       $(document).ready(function(){
          $("#button-admin2-preview").click(function(e){
             event.preventDefault();
            $("#formulaire-admin2").hide();
             $("#formulaire-admin1").show();
          });
          $("#button-admin3-preview").click(function(e){
             event.preventDefault();
            $("#formulaire-admin3").hide();
             $("#formulaire-admin2").show();
          });
          $("#button-admin4-preview").click(function(e){
             event.preventDefault();
            $("#formulaire-admin4").hide();
             $("#formulaire-admin3").show();
          });
          $("#button-admin5-preview").click(function(e){
             event.preventDefault();
            $("#formulaire-admin5").hide();
             $("#formulaire-admin4").show();
          });

          $("#button-admin6-preview").click(function(e){
             event.preventDefault();
            $("#formulaire-admin6").hide();
             $("#formulaire-admin5").show();
          });
        });

      /*VOIR DATA*/
     $("#Voir-data1").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data2").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data3").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data4").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data5").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data6").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data7").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data8").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data9").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data10").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data11").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data12").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data13").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data14").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data15").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $("#table-display-admin,#envoyer-admin").show();
     });

     $("#envoyer-admin").click(function(e){
        event.preventDefault();
        $("#data-dispay-admin_").hide();
         $("#successfull-saved-admin").show();
     });

  });
  //Checkbox
  $("#test036").click(function() {
    if($(this).is(":checked")) {
        $("#delivery1").show();
    } else {
        $("#delivery1").hide();
    }
  });

  $("#test037").click(function() {
    if($(this).is(":checked")) {
        $("#delivery2").show();
    } else {
        $("#delivery2").hide();
    }
  });
  $("#test038").click(function() {
    if($(this).is(":checked")) {
        $("#delivery3").show();
    } else {
        $("#delivery3").hide();
    }
  });
  $("#test039").click(function() {
    if($(this).is(":checked")) {
        $("#delivery4").show();
    } else {
        $("#delivery4").hide();
    }
  });

  $("#switch1").click(function() {
    if($(this).is(":checked")) {
        $("#form3,.applicant-button3").show();
    } else {
        $("#form3").hide();
    }
  });

  $("#test1").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-A").show();
    } else {
        $("#date-license-A").hide();
    }
  });

  $("#test2").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-b").show();
    } else {
        $("#date-license-b").hide();
    }
  });

  $("#test3").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-c").show();
    } else {
        $("#date-license-c").hide();
    }
  });

  $("#test4").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-d").show();
    } else {
        $("#date-license-d").hide();
    }
  });

  $("#test5").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-e").show();
    } else {
        $("#date-license-e").hide();
    }
  });

  $("#test010").click(function() {
    if($(this).is(":checked")) {
        $("#date-license-f").show();
    } else {
        $("#date-license-f").hide();
    }
  });
