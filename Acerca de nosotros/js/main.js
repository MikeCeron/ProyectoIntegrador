class person{
      id=0
      name="";
      email= "";
      age=18;
      static total=0
      constructor(name,email,age,colaboracion,url){
          this.name=name;
          this.email = email;
          this.age = age;
          this.colaboracion = `"${colaboracion}"`;
          this.url=url
          person.total+=1
          this.id=person.total
      }
      printInfo(div){
          div.innerHTML= `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${this.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="text-center">
                    <img src=${this.url} class="rounded" alt="imagen${this.id}">
                </div>
                    <div class="alert alert-primary" role="alert">
                        Correo Electronico: ${this.email}!
                    </div>
                ${this.colaboracion}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        `;
      }
      }




function idetificarclase(a){
    if(a==1){
        let divP=document.getElementById("modal1")
        let Armando=new person("Jose Armando Roman Torres","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Armando.printInfo(divP);
    }
    else if(a==2){
        let divP=document.getElementById("modal1")
        let Daisy=new person("Daisy Sarahí Matus Morales","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Daisy.printInfo(divP);
    }
    else if(a==3){
        let divP=document.getElementById("modal1")
        let Oscar=new person("Oscar Martínez","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Oscar.printInfo(divP);
    }
    else if(a==4){
        let divP=document.getElementById("modal1")
        let Saul=new person("Pérez Elizondo Saúl Octavio","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Saul.printInfo(divP);

    }
    else if(a==5){
        let divP=document.getElementById("modal1")
        let Armando=new person("Luis Fernando Melchor Hernández","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Armando.printInfo(divP);
    }
    else if(a==6){
        let divP=document.getElementById("modal1")
        let Daisy=new person("Rodrigo Niebla Torres López","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Daisy.printInfo(divP);
    }
    else if(a==7){
        let divP=document.getElementById("modal1")
        let Oscar=new person("Masyell De la Rosa","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Oscar.printInfo(divP);
    }
    else if(a==8){
        let divP=document.getElementById("modal1")
        let miguel=new person("Miguel Angel Cerón Martínez","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident."
        ,"./imagenes/PérezElizondo.jpg")
        miguel.printInfo(divP);

    }
    


}
    
 