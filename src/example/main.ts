import { divide, substract, sum } from '../math';
const body: HTMLCollectionOf<HTMLElementTagNameMap['body']> = document.getElementsByTagName('body');
body[0].innerText = `Divide: ${divide(6, 2)} | substract: ${substract(6, 2)} | sum: ${sum(6, 2)}`;
