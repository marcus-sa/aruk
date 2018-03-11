/// <reference types="react" />
import * as React from 'react';
import { UIKit } from '../lib/UIKit';
export interface ButtonProps extends UIKit.Props<Button> {
    active?: boolean;
    large?: boolean;
    link?: boolean;
    loading?: boolean;
    small?: boolean;
    text?: boolean;
    disabled?: boolean;
}
export declare class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
