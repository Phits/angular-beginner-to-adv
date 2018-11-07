import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { throwError, from, empty, Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todo property with the items returned from the serve', () => {
    const todos = [1, 2, 3, 4];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from server ', () => {
    const todo = { id: 1 };
    const spy = spyOn(service, 'add').and.callFake(t => {
      return from([todo]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message propery if server returns an error when adding new todo', () => {
    const error = 'error from server';
    const spy = spyOn(service, 'add').and.callFake(t => {
      return throwError(error);
    });

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.callFake(t => {
      return empty();
    });

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.callFake(t => {
      return empty();
    });

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith();
  });

});
