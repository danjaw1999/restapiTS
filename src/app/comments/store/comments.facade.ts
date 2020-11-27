import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, mergeMap, take, tap } from "rxjs/operators";

import { getCurrentRouteId } from "src/app/core/selectors/route.selectors";
import { getOneComment, selectComments } from "../selectors/comments.selectors";

import { getComment, getComments } from "./comments.actions";

@Injectable({
    providedIn: 'root'
})
export class CommentsFacade{
    comments$ = this.store.pipe(select(selectComments));
    comment$ = this.getComment();
    id:number;

    constructor(private store: Store<any>){}
    getComments(){
        this.store.dispatch(getComments())
    }
    getComment(){
        return this.store.pipe(
            select(getCurrentRouteId),
            mergeMap((id) => {                
                this.id = id;
                return this.store.pipe(
                    select(getOneComment(id))
                )
            }),
            tap((data) => {
                if(!data){
                    this.store.dispatch(getComment({id: this.id}))
                }
                return data;
            }),
            filter(data => !!data),
            take(1)
        )
    }
}