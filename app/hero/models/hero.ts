import {Injectable} from 'angular2/core';

@Injectable()
export class Hero {
  id: number
  constructor(
    public name: string,
    // [MEMO] ? はOptional Properties
    public power?: string
  ) {
    this.id = nextId++;
  }
}

let nextId = 1;