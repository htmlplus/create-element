import { Element, Property } from '@htmlplus/element';

@Element()
export class MyCounter {
  @Property()
  value: number = 0;
  
  render() {
    return (
      <host onClick={() => this.value++}>
        Count is {this.value}
      </host>
    )
  }
}
