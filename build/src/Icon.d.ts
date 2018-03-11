/// <reference types="react" />
import { UIKit } from '../lib/UIKit';
export interface IconProps extends UIKit.Props<Icon> {
    children?: JSX.Element | string;
    image?: boolean;
    src?: string;
    type?: string;
    link?: boolean;
    button?: boolean;
}
export declare class Icon extends UIKit.Component<IconProps> {
    type: string;
    options: string[];
    render(): JSX.Element;
}
