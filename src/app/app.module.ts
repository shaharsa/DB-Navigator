import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TreeNodeService } from './tree-node.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TabsMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [
    TreeNodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
