/// <reference types="react" />
import { UIKit } from '../lib/UIKit';
export interface iAccordionContent {
    key: string;
    className?: string;
    children?: JSX.Element;
    title?: string | JSX.Element;
    content?: string | JSX.Element;
}
export interface AccordionState {
    active: (string | number)[];
}
export interface AccordionProps extends UIKit.Props<Accordion> {
    title?: string | JSX.Element;
    content?: iAccordionContent[];
    active?: string | number;
    animation?: boolean;
    collapsible?: boolean;
    duration?: number;
    multiple?: boolean;
    transition?: UIKit.Component | JSX.Element | string;
}
export declare class Accordion extends UIKit.Component<AccordionProps, AccordionState> {
    defaultProps: {
        collapsible: boolean;
    };
    state: AccordionState;
    type: string;
    events: string[];
    options: string[];
    static Title({children, onToggle}: {
        onToggle?: (e: any) => any;
        children: JSX.Element | any;
    }): JSX.Element;
    static Content({children, hidden}: {
        children: JSX.Element | any;
        hidden?: boolean;
    }): JSX.Element;
    private getMultipleItems(key);
    private toggle;
    private shouldItemBeHidden(key);
    render(): JSX.Element;
}
