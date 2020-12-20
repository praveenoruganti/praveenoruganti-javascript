 $( document ).ready(function() {
       $("#dp1").hide();
       $("#dp2").hide();
       $("#dp3").hide();
      var obj=$("#days1");
      setDays(obj, 31);
      obj=$("#days2");
      setDays(obj, 31);
      obj=$("#days3");
      setDays(obj, 31);
      obj=$("#days4");
      setDays(obj, 31);
    initDate();
    $("#dp1").datepicker({
      changeMonth: true,
      changeYear: true,
    });
    $("#dp2").datepicker({
        changeMonth: true,
        changeYear: true,
    });
    $("#dp3").datepicker({
        changeMonth: true,
        changeYear: true,
    });
    $("#picker1").click(function() {
         if( $("#dp1").is(":hidden") )
         {
            var y=$("#year1").val();
            var m=$("#month1")[0].selectedIndex;
            var d=$("#days1")[0].selectedIndex+1;
            if( y=="" ) y=1990;
            $("#dp1").datepicker("setDate", new Date(y,m,d));
            $("#dp1").show();
         }
         else
            $("#dp1").hide();
    });
    $("#picker2").click(function() {
         if( $("#dp2").is(":hidden") )
         {
            var y=$("#year2").val();
            var m=$("#month2")[0].selectedIndex;
            var d=$("#days2")[0].selectedIndex+1;
            if( y=="" ) y=1990;
            $("#dp2").datepicker("setDate", new Date(y,m,d));
            $("#dp2").show();
         }
         else
            $("#dp2").hide();
    });
    $("#picker3").click(function() {
         if( $("#dp3").is(":hidden") )
         {
            var y=$("#year3").val();
            var m=$("#month3")[0].selectedIndex;
            var d=$("#days3")[0].selectedIndex+1;
            if( y=="" ) y=1990;
            $("#dp3").datepicker("setDate", new Date(y,m,d));
            $("#dp3").show();
         }
         else
            $("#dp3").hide();
    });
    $("#dp1").change(function() {
      var date=$("#dp1").val();
      $("#month1")[0].selectedIndex=parseInt(date.substring(0,2))-1;
      $("#days1")[0].selectedIndex=parseInt(date.substring(3,5))-1;
      $("#year1").val(date.substring(6,10));
    });
    $("#dp2").change(function() {
      var date=$("#dp2").val();
      $("#month2")[0].selectedIndex=parseInt(date.substring(0,2))-1;
      $("#days2")[0].selectedIndex=parseInt(date.substring(3,5))-1;
      $("#year2").val(date.substring(6,10));
    });
    $("#dp3").change(function() {
      var date=$("#dp3").val();
      $("#month3")[0].selectedIndex=parseInt(date.substring(0,2))-1;
      $("#days3")[0].selectedIndex=parseInt(date.substring(3,5))-1;
      $("#year3").val(date.substring(6,10));
    });
    });
  function setDays(obj, n) {
    $(obj).find('option')
        .remove()
        .end()
    for( var i=1; i<=n; i++)
      $(obj).append('<option>'+i+'</option>');
  }
  function initDate() {
      var d = new Date();
      var obj=$("#days1");
      setDays(obj, 31);
      obj=$("#days2");
      setDays(obj, 31);
      $("#days2").prop("selectedIndex", d.getDate()-1 );
      $("#month2").prop("selectedIndex", d.getMonth() );
      $("#year2").val( d.getFullYear() );
      $("#age").val("");
  }
  function calc() {
    var txt;
    var day1=$("#days1").prop("selectedIndex")+1;
    var month1=$("#month1").prop("selectedIndex")+1;
    var year1=$("#year1").val();
    if( year1=='' ) year1="1990";
    var day2=$("#days2").prop("selectedIndex")+1;
    var month2=$("#month2").prop("selectedIndex")+1;
    var year2=$("#year2").val();
    var d1 = moment([year1, month1-1, day1]);
    var d2 = moment([year2, month2-1, day2]);
    var years = d2.diff(d1, 'years');
    var months = d2.diff(d1, 'months')-years*12;
    var d3 = d1.add(years,'years').add(months,'months');
    var days = d2.diff(d3, 'days');
    txt = years+(years==1?" year, ":" years, ")+months+(months==1?" month, ":" months, ")+days+(days==1?" day":" days");
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'years', true)).toFixed(2)+" years";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'months', true)).toFixed(2)+" months";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'weeks', true)).toFixed(2)+" weeks";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'days', true)).toFixed(0)+" days";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'hours', true)).toFixed(0)+" hours";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'minutes', true)).toFixed(0)+" minutes";
    d1 = moment([year1, month1-1, day1]);
    d2 = moment([year2, month2-1, day2]);
    txt+= "<br>= "+(d2.diff(d1, 'seconds', true)).toFixed(0)+" seconds";


    $("#age").html(txt);
  }

  function calc2() {
    var txt;
    var day3=$("#days3").prop("selectedIndex")+1;
    var month3=$("#month3").prop("selectedIndex")+1;
    var year3=$("#year3").val();
    if( year3=='' ) year3="1990";
    var age2=$("#age2").val();
    var d3 = moment([year3, month3-1, day3]);
    d3.add(age2, 'years');
    txt=d3.format("MMMM D YYYY")+"\n";
    txt+=d3.fromNow();
    $("#age").html(txt);
  }