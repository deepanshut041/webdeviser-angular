import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



const routes:Routes =[
    {path:'demo1',loadChildren:"./demo1/demo1.module#Demo1Module"},
    {path:'demo2',loadChildren:"./demo1/demo1.module#Demo2Module"},
    {path:'demo3',loadChildren:"./demo1/demo1.module#Demo3Module"}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}