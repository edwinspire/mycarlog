import { v } from '@dojo/framework/core/vdom';
import WidgetBase from '@dojo/framework/core/WidgetBase';
import * as css from './TextShow.m.css';



export interface TextShowProperties {
	label: string;
	classes: string[];
	ShowLabel?: boolean;
	onClick?(e: Event): void;
}

export default class TextShow extends WidgetBase<TextShowProperties> {
	protected render(){
		return v('span', {classes: [css.icon],
			onclick:(e: Event)=>{
				this.properties.onClick && this.properties.onClick(e);	
				console.log('Click');				
			}
		}, [
		v('i', {classes: this.properties.classes}, []),
		this.properties.ShowLabel ? v('label', {classes: css.label}, [this.properties.label]): null
		]);
	}
}