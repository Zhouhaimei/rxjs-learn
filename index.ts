import { Observable } from 'rxjs';

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});
debugger;
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});
