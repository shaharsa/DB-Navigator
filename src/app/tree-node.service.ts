import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeNodeService {
  public selectedTreeNode:string;

  constructor() {
    this.selectedTreeNode = 'No selected item';
  }
}
