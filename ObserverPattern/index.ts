import { Text } from './Observer';
import { Input } from './Subject';

//get HTML elements
const subject: HTMLInputElement = document.querySelector('#subject');
const observer: HTMLElement = document.querySelector('#observer');

//Instance Object
const Subject = new Input(subject);
const Observer = new Text(observer);

Subject.subscribe(Observer);
