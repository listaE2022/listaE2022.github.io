import { Component } from "react";

class Cooperacao extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.id = "goBackBtn-script";
        script.src = "./scripts/goBackBtn.js";
        script.async = true;

        var script_in_page = document.getElementById("goBackBtn-script");
        if(script_in_page != null) script_in_page.remove()
        document.body.appendChild(script);
    }

    render(){
        return(
            <div className="departamento">
                <Header section_name='Cooperação e Estudantes'></Header>
                <div className='DepartamentoMain'>
                    
                </div>
            </div>
        );
    }

}