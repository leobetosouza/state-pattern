var STATES_APP = (function(global, window, document, $, undefined){
    "user strict";

    function State(){};

    State.prototype = {
        abrir: function(context){
            alert("Operação não disponivel");
        },
        fechar: function(context){
            alert("Operação não disponivel");
        },
        autenticar: function(context){
            alert("Operação não disponivel");
        },
        escrever: function(context){
            alert("Operação não disponivel");
        },
        apagar: function(context){
            alert("Operação não disponivel");
        },
        esperar: function(context){
            alert("Operação não disponivel");
        }
    };

    //States

    function Fechado(){}
    Fechado.prototype = new State();

    Fechado.prototype.abrir = abrir;



    //Operations

    function abrir(context){
        toOutput("")
        context.changeState(new Aberto());
    }

    function escrever(){
        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis sagittis gravida. Sed iaculis pellentesque vulputate. Aliquam mauris lectus, cursus eu vehicula a, feugiat eu nisl. Quisque sit amet risus erat, sit amet lacinia dolor. Suspendisse ac est sem. Phasellus venenatis condimentum lectus nec venenatis. Proin magna sem, viverra porta pretium quis, varius ut nisi. In consectetur, purus id pellentesque sodales, neque turpis scelerisque est, eget eleifend dolor purus sit amet enim. Aenean malesuada, diam ac pretium tempus, risus est lacinia lectus, ac fringilla felis dui eu erat. Pellentesque sagittis magna ac odio mollis ut tristique mauris semper. Vestibulum in tellus vitae eros egestas feugiat in ut purus.";
        toOutput(text);
    }

    function apagar(){
        toOutput();
    }

    function esperar(){
        var n = 10,
        interval;

        context.changeState(new EmEspera());

        interval = setInterval(function(){
            n--;
            toOutput(n--);
            if (!n){
                clearInterval(interval);
            }
        },1000);

    }

    //util


    function changeStateTag(state){
        document.getElementById("output").innerHTML
    }

    function toOutput(text){
        if(text === undefined)
            text = "";

        document.getElementById("output").innerHTML = text;
    }

    var public = {
        escrever: escrever,
        apagar: apagar,
        esperar: esperar
    };

    return Fechado;

})(this, window, document, jQuery);