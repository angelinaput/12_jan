function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

function clean(){
    document.form.textarea.value = "";
}

function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.lenght-1);
}