var lec_count = document.getElementById("lec-count").value;

function get_form(){
    var form = "";
    lec_count = document.getElementById("lec-count").value;
    for(var i=0;i<lec_count;i++){
        form += "<tr><td><input type='number' id='ects" + i + "' value='2'></td><td><select id='grade" + i + "'><option value='0'>A</option><option value='1'>A-</option><option value='2'>B+</option><option value='3'>B</option><option value='4'>B-</option><option value='5'>C+</option><option value='6'>C</option><option value='7'>C-</option><option value='8'>D+</option><option value='9'>D</option><option value='10'>D-</option><option value='11'>F</option></select></td></tr>";
    }

    return form;
}

function display_form(display_id){
    document.getElementById(display_id).innerHTML = get_form();
}


function increase_lec_count(display_id){
    lec_count++;
    document.getElementById("lec-count").value = lec_count;
    display_form(display_id);
}

function decrease_lec_count(display_id){
    lec_count--;
    document.getElementById("lec-count").value = lec_count;
    display_form(display_id);
}

function get_ects(index){
    var ects_id = "ects" + index;
    var e = document.getElementById(ects_id);
    return e.value;
}

function display_ects(display_id, ects){
    document.getElementById(display_id).innerHTML = ects;
}

function get_grade(index){
    var res_id = "grade" + index;
    var G_id = "G" + document.getElementById(res_id).value;
    var e = document.getElementById(G_id);
    return e.value;
}

function calculate_GPA(){
    var total_ECTS = 0, total_effective = 0;

    for(var i=0; i<lec_count; i++){
        total_effective += +(get_grade(i)*get_ects(i));
        total_ECTS += +(get_ects(i));
    }

    var GPA = total_effective/total_ECTS;
    return GPA.toFixed(2);
}

function display_GPA(display_id){
    document.getElementById(display_id).innerHTML = "<h1>" + calculate_GPA() + "</h1>";
}

function display_result(ECTS_display, GPA_display){
    var total_ECTS = 0;

    for(var i=0;i<lec_count;i++){
        total_ECTS += +(get_ects(i));
    }
    
    display_GPA(GPA_display);
    display_ects(ECTS_display,total_ECTS);
}

//Exception conditions
/*
    //Negative ECTS
    //0 ECTS
*/