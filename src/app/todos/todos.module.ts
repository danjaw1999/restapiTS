import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodoItemInfoComponent } from './todo-item-info/todo-item-info.component';

@NgModule({
    imports: [
        CommonModule,
        TodosRoutingModule   
    ],
    declarations: [
        TodosComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoItemInfoComponent
    ]
})
export class TodosModule {};