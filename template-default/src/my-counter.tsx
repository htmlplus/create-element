import { Element, Property } from '@htmlplus/element';

@Element()
export class MyCounter {
  @Property()
  counter: number = 0;
  
  render() {
    return (
      <host onClick={() => this.counter++}>
        Count is {this.counter}
      </host>
    )
  }
}
