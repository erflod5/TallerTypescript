var ip = 'http://192.168.43.153:3000/';

function get(){
    $.get(`${ip}Prueba`,function(result){
        console.log(result);
        alert(result.Working);
    });
}

function post(){
    $.post(`${ip}Prueba`,{data:JSON.stringify({"Nombre":"Erik"})},function(result){
        console.log(result['Working']);
        alert(result['Working']);
    });
}
