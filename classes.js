class Variable {
  constructor(name,type,value){
    this.name=name;
    this.type=type;
    this.value=value;
  }
}

class Affectation {
    constructor(variable,value){
      this.variable=variable;
      this.value=value;
    }
}

class Function {
    constructor(name,args,return_type,code){
      this.name=name;
      this.args=args;
      this.return_type=return_type;
      this.code=code;
    }
}

class FunctionCall {
    constructor(name,args){
      this.name=name;
      this.args=args;
    }
}

class Print {
    constructor(text){
      this.text=text;
    }
}

class If {
    constructor(condition){
      this.condition=condition;
    }
  }

  class ElseIf {
    constructor(condition){
      this.condition=condition;
    }
  }

  class Else {
    constructor(related_if){
      this.related_if=related_if;
    }
  }


  class ForLoop {
    constructor(name_index,start,end){
      this.name_index=name_index;
      this.start=start;
      this.end=end;
    }
  }

  class WhileLoop {
    constructor(name,type,value){
      this.name=name;
      this.type=type;
    }
  }

  class Algorithm {
      constructor(operations){
          this.operations=operations;
      }
  }