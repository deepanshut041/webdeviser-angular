import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-screen',
    templateUrl: 'screen.component.html',
    styleUrls: ['screen.component.css']
})
export class ScreenComponent {

    question(i:number){
        var elm1 = document.getElementById("question-1");
        var elm2 = document.getElementById("question-2");
        var elm3 = document.getElementById("question-3");
        if(i == 1){
            elm1.style.display = "block"
            elm2.style.display = "none"
            elm3.style.display = "none"
        }
        if(i == 2){
            elm1.style.display = "none"
            elm2.style.display = "block"
            elm3.style.display = "none"
        }
        if(i == 3){
            elm1.style.display = "none"
            elm2.style.display = "none"
            elm3.style.display = "block"
        }
    }
}
