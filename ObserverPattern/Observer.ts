export interface Observer{
  update: (data: any) => void;
}

export class Text implements Observer{
  private el: HTMLElement;

  constructor(element: HTMLElement){
    this.el = element;
  }

  update(data: any) {
    this.el.innerText = data;
  }
}
