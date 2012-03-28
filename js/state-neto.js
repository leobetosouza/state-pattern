/**
 * Define a interface para encapsular o comportamento associado com um estado
 * específico.
 * @constructor
 */
function State() {}

State.prototype = {
    /**
     * Operação A
     * @param {Context} context
     */
    operationA: function(context){
        console.log("operação indisponível");
    },

    /**
     * Operação B
     * @param {Context} context
     */
    operationB: function(context){
        console.log("operação indisponível");
    },

    /**
     * Operação C
     * @param {Context} context
     */
    operationC: function(context){
        console.log("operação indisponível");
    },

    /**
     * Operação D
     * @param {Context} context
     */
    operationD: function(context){
        console.log("operação indisponível");
    }
};

/**
 * Implementação do estado A
 * @constructor
 */
function ConcreteStateA(){}
ConcreteStateA.prototype = new State();

/**
 * Implementação do comportamento da operação A para esse estado específico.
 * @param {Context} context
 */
ConcreteStateA.prototype.operationA = function(context) {
    console.log("Operação A executada");
    context.changeState(new ConcreteStateB());
};

/**
 * Implementação do estado B
 * @constructor
 */
function ConcreteStateB(){}
ConcreteStateB.prototype = new State();

/**
 * Implementação do comportamento da operação B para esse estado específico.
 * @param {Context} context
 */
ConcreteStateB.prototype.operationB = function(context) {
    console.log("Operação B executada");
    context.changeState(new ConcreteStateC());
};

/**
 * Implementação do estado C
 * @constructor
 */
function ConcreteStateC(){}
ConcreteStateC.prototype = new State();

/**
 * Implementação do comportamento da operação C para esse estado específico.
 * @param {Context} context
 */
ConcreteStateC.prototype.operationC = function(context) {
    console.log("Operação C executada");
    context.changeState(new ConcreteStateD());
};

/**
 * Implementação do estado D
 * @constructor
 */
function ConcreteStateD(){}
ConcreteStateD.prototype = new State();

/**
 * Implementação do comportamento da operação D para esse estado específico.
 * @param {Context} context
 */
ConcreteStateD.prototype.operationD = function(context) {
    console.log("Operação D executada");
    context.changeState(new ConcreteStateA());
};

/**
 * Interface que os Clients conhecem e sabem utilizar, poderia ser uma conexão
 * de banco de dados, FTP, SSH, etc.
 * 
 * @constructor
 * @param {State} state Estado inicial
 */
function Context(state){
    if (state===undefined) state = new ConcreteStateA();

    this.state = state;
}

Context.prototype = {
    /**
     * Essa operação é utilizada para variar o estado do Context
     * @param {State} state O novo estado do Context.
     */
    changeState: function(state){
        this.state = state;
    },

    /**
     * Operação A
     */
    operationA: function() {
        this.state.operationA(this);
    },

    /**
     * Operação B
     */
    operationB: function() {
        this.state.operationB(this);
    },

    /**
     * Operação C
     */
    operationC: function() {
        this.state.operationC(this);
    },

    /**
     * Operação D
     */
    operationD: function() {
        this.state.operationD(this);
    }
};

/**
 * Um client que utiliza a interface do Context para fazer alguma coisa.
 */
var Client = {
    /**
     * Utiliza a interface do Context para fazer alguma coisa
     * @param {Context} context
     */
    execute: function(context) {
        context.operationA();
        context.operationD();
        context.operationB();
        context.operationC();
    }
};

Client.execute(new Context());