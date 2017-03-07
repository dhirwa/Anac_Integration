var room = 1;
function education_fields() {
  room++;
  var objTo = document.getElementById('education_fields')
  var divtest = document.createElement("div");
divtest.setAttribute("class", "form-group removeclass"+room);
var rdiv = 'removeclass'+room;
  divtest.innerHTML = '<div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="Schoolname[]" value="" placeholder="Nom et Prenoms"></div></div><div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Major" name="Major[]" value="" placeholder="Titre"></div></div><div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Telephone"></div></div><div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value=""placeholder="Telecopieur"></div></div><div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Adresse Electronique"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><div class="input-group"><div class="input-group-btn"><button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> <i class="fa fa-minus"></i> </button></div></div></div></div><div class="clear"></div></div>';
  objTo.appendChild(divtest)
}
 function remove_education_fields(rid) {
   $('.removeclass'+rid).remove();
 }


var room = 1;
function education_fields2() {
   room++;
   var objTo = document.getElementById('education_fields2')
   var divtest = document.createElement("div");
divtest.setAttribute("class", "form-group removeclass"+room);
var rdiv = 'removeclass'+room;
   divtest.innerHTML = '<div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="Schoolname[]" value="" placeholder="Aeronef"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Major" name="Major[]" value="" placeholder="Type"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Model"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Immatriculation"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Nationalite" name="Degree[]" value="" placeholder="Nationalite"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree"name="Degree[]" value="" placeholder="Nombre de Passagers"></div></div><div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Capacite charge de Marchandises"></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><div class="input-group-btn"><button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> <i class="fa fa-minus"></i> </button></div></div></div></div><div class="clear"></div></div>';
   objTo.appendChild(divtest)
}
  function remove_education_fields2(rid) {
   $('.removeclass'+rid).remove();
  }


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
         $("#table-applicant").show();
    });
    $("#envoyer").click(function(e){
         event.preventDefault();
        $("#table-applicant").hide();
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
    // $("#envoyer").click(function(e){
    //      event.preventDefault();
    //     $(".table-responsive").hide();
    //      $("#successfull-saved").show();
    // });
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
       $("#table-display-admin").hide();
        $("#table-display-admin2").show();
     });

     $("#btn_envoyer").click(function(e){
        event.preventDefault();
       $("#table-display-admin2").hide();
        $(".saved").show();
     });

     $("#recommencer").click(function(e){
        event.preventDefault();
       $("#formulaire-admin6,#successfull-saved-admin").hide();
        $("#formulaire-admin0,.anac-background-admin").show();
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
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data2").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data3").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data4").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data5").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data6").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data7").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data8").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data9").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data10").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data11").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data12").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data13").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data14").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });
     $("#Voir-data15").click(function(e){
        event.preventDefault();
       $(".anac-background-admin").hide();
        $(".table-display__,#table-display-admin,#envoyer-admin").show();
     });

     $("#envoyer-admin").click(function(e){
        event.preventDefault();
        $("#formulaire-admin0,#envoyer-admin").hide();
         $("#formulaire-admin1").show();
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

  $("#test1").click(function() {
    if($(this).is(":checked")) {
        $(".section-b").show();
    } else {
        $(".section-b").hide();
    }
  });

  $("#test2").click(function() {
    if($(this).is(":checked")) {
        $(".section-b-second").show();
    } else {
        $(".section-b-second").hide();
    }
  });

  $("#test3").click(function() {
    if($(this).is(":checked")) {
        $(".section-b-third").show();
    } else {
        $(".section-b-third").hide();
    }
  });

  $("#test4").click(function() {
    if($(this).is(":checked")) {
        $(".section-b-fourth").show();
    } else {
        $(".section-b-fourth").hide();
    }
  });


  $(document).ready(function(){
    $("#pagination1").click(function(e){
       event.preventDefault();
      $("#section2").hide();
       $("#section1").show();
    });

     $("#pagination2").click(function(e){
        event.preventDefault();
       $("#section1").hide();
        $("#section2").show();
     });
   });
