import { Observer } from './Observer';

interface Subject{
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
  notify: (data: any) =>void;
}

export class Input implements Subject{
  private observers: Observer[] =[];

  constructor(el: HTMLInputElement){
    el.addEventListener('input', () => this.notify(el.value))
  }

  subscribe(observer: Observer){
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer){
    const index = this.observers.findIndex(obs => obs===observer);
    this.observers.splice(index, 1);
  }

  notify(data: any){
    this.observers.forEach(obs => obs.update(data));
  }
}
