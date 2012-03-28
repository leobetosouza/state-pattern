var STATES_APP = (function(global, window, document, $){
    "use strict";

    function State(nome){
        this.nome = nome;
    }

    State.prototype = {
        abrir: function(context){
            log("Operação abrir não disponivel");
        },
        fechar: function(context){
            log("Operação fechar não disponivel");
        },
        autenticar: function(context){
            log("Operação autenticar não disponivel");
        },
        escrever: function(context){
            log("Operação escrever não disponivel");
        },
        apagar: function(context){
            log("Operação apagar não disponivel");
        },
        esperar: function(context){
            log("Operação esperar não disponivel");
        }
    };

    //


    //States

    function PodeFechar(){}
    PodeFechar.prototype = new State();
    PodeFechar.prototype.fechar = function(context){
        log("So long and thanks for all the fish!");
        context.changeState(new Fechado());
    };

    function Aberto(){}
    Aberto.prototype = new PodeFechar("Aberto");



    function Autenticado(){}
    Autenticado.prototype = new State("Autenticado");

    Autenticado.prototype.escrever = function(context) {
        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis sagittis gravida. Sed iaculis pellentesque vulputate. Aliquam mauris lectus, cursus eu vehicula a, feugiat eu nisl. Quisque sit amet risus erat, sit amet lacinia dolor. Suspendisse ac est sem. Phasellus venenatis condimentum lectus nec venenatis. Proin magna sem, viverra porta pretium quis, varius ut nisi. In consectetur, purus id pellentesque sodales, neque turpis scelerisque est, eget eleifend dolor purus sit amet enim. Aenean malesuada, diam ac pretium tempus, risus est lacinia lectus, ac fringilla felis dui eu erat. Pellentesque sagittis magna ac odio mollis ut tristique mauris semper. Vestibulum in tellus vitae eros egestas feugiat in ut purus.";
        toOutput(text);
        //context.changeState(new EmEspera());
    };

    Autenticado.prototype.apagar = function(context) {
        toOutput();
        //context.changeState(new EmEspera());
    };


    function Fechado(){}
    Fechado.prototype = new State("Fechado");
    Fechado.prototype.abrir = function(context) {
        log("Hello world!");
        context.changeState(new Aberto());
    };


    //Operations



    function esperar(context){
        var n = 10,
        interval;

        //context.changeState(new EmEspera());

        interval = setInterval(function(){
            n--;
            log("Esperando " + n + "...");
            if (!n){
                log("Fim da Espera.");
                //context.changeState(new Autenticado());
                clearInterval(interval);
            }
        }, 1000);

    }

    //util


    function changeStateTag(state){
        document.getElementById("output").innerHTML = state;
    }

    function toOutput(text){
        if(text === undefined){
            text = "";
        }
        document.getElementById("output").innerHTML = text;
    }

    var log_size = 0;

    function log(text){
        var entry = document.createElement("p");
        log_size++;
        entry.innerHTML = "$" + log_size + " " + text;
        document.getElementById("log").appendChild(entry);
    }


    //context

    function Context(state){
        if (state===undefined){
            state = new Fechado();
        }

        this.state = state;
        
            console.log(this.state.nome)
    }

    Context.prototype = {
        changeState: function(state){
            this.state = state;
        },

        abrir: function() {
            this.state.abrir(this);
        },

        fechar: function() {
            this.state.fechar(this);
        },

        autenticar: function() {
            this.state.autenticar(this);
        },

        escrever: function() {
            this.state.escrever(this);
        },

        apagar: function() {
            this.state.apagar(this);
        }
    };


    // var Client = {
    //     execute: function(context) {
    //         context.abrir();
    //         context.fechar();
    //         context.autenticar();
    //         context.escrever();
    //         context.apagar();
    //     }
    // };

    // Client.execute(new Context());


    // var publico = {
    //     escrever: escrever,
    //     apagar: apagar,
    //     esperar: esperar,
    //     abrir: abrir
    // };

    return new Context();

})(this, window, document);