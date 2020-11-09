import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import treedata from '../../assets/tree.json';
import { TreeNodeService } from '../tree-node.service';

interface DBNode {
  name: string;
  type: string;
  children?: DBNode[];
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  public treeControl = new NestedTreeControl<DBNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<DBNode>();
  public typeToIcon = new Map([
    [ 'connection', 'assets/img/connection-icon.png'],
    [ 'database', 'assets/img/database-icon.png'],
    [ 'schema', 'assets/img/schema-icon.png'],
    [ 'table', 'assets/img/table-icon.png'],
    [ 'column', 'assets/img/column-icon.png']
  ]);

  constructor(public treeNodeService: TreeNodeService) {
    this.dataSource.data = treedata;
  }

  hasChild = (_: number, node: DBNode) => !!node.children && node.children.length > 0;
  
  onNodeClick(name: string){
    this.treeNodeService.selectedTreeNode = name;
  }

  ngOnInit(): void {
  
  }
}