/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  l=[]
  add(todo){
    this.l.push(todo);
  }
  remove(i){
    let s=this.l.length;
    if (s>i){
      this.l.splice(i,1);
    }
    
  } 
  update(i,todo){
    let s=this.l.length;
    if (s>i){
      this.l[i]=todo;
    }
    
  }
  getAll(){
    return this.l;
  }
  get(i){
    let s=this.l.length;
    if (s>i){
      return this.l[i]
    }
    else{
      return null;
    }
    
  }
  clear(){
    this.l=[];
  }
}

module.exports = Todo;
