import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodosRoutingModule } from "./todos-routing.module";

@NgModule({
    imports: [
        CommonModule,
        TodosRoutingModule   
    ],
    declarations: [
        TodosComponent,
        TodoListComponent,
        TodoItemComponent
    ]
})
export class TodosModule {};