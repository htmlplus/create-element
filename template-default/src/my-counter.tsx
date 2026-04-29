import { Element, State } from '@htmlplus/element';

@Element()
export class MyCounter {
	@State()
	value: number = 0;

	render() {
		return <host value={this} onClick={() => this.value++}>Count is {this.value}</host>;
	}
}
