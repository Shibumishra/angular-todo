import { Component } from '@angular/core';
import { model, TodoItem } from 'src/Model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  model = new model();

  // return user name
  getName() {
    return this.model.user;
  }

  getTodoItem() {
    //return all items
    return this.model.items;

    //return only items that's done
    return this.model.items.filter(item => item.done);
  }

  addItem(todotext: string) {
    if (todotext !== "") {
      this.model.items.push(new TodoItem(todotext, false));
    }
  }
}
