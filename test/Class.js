class Component{
    
    constructor(year,color) {
        this.year=year
        this.color=color;
        
    }
    
}
var a=new Component(2018,"red");
//console.log(a.year);
var b=new Component(2019,"black");
//console.log(b);

class ComponentB extends Component{
    constructor(){
        super(2018,"red");
        
    }
     nameA(){
         if(this.color="red")
        console.log("this is a good car");
        console.log(this.color);
    }
    
}
var compoentb=new ComponentB();
console.log(compoentb.year);
compoentb.nameA()

class A{
    contructor()
    {
        this.name="hema"
    }
}


class B{
    contructor()
    {
        this.name="hema"
        this.age="25"
    }
}