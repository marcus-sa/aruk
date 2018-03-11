/// <reference types="react" />
import { UIKit } from '../lib/UIKit';
export interface AlertState {
    active: boolean;
}
export interface AlertProps extends UIKit.Props<Alert> {
    close?: boolean;
    active?: boolean;
    animation?: boolean;
    duration?: number;
    selClose?: string;
}
export declare class Alert extends UIKit.Component<AlertProps, AlertState> {
    state: AlertState;
    static defaultProps: object;
    type: string;
    events: string[];
    options: string[];
    private _close;
    componentWillReceiveProps({active}: AlertProps): void;
    static Close({onClick}: UIKit.Events): JSX.Element;
    render(): JSX.Element;
}
