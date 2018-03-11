/// <reference types="react" />
import { UIKit } from '../lib/UIKit';
export interface NavbarProps extends UIKit.Props<Navbar> {
    className?: string;
    children?: JSX.Element | string;
    afterMount?: () => void;
    selTarget?: string;
    clsActive?: string;
    container?: boolean;
    align?: string;
    mode?: string;
    delayShow?: number;
    delayHide?: number;
    boundary?: any;
    boundaryAlign?: boolean;
    offset?: number;
    dropbar?: boolean;
    dropbarMode?: string;
    duration?: number;
}
export declare class Navbar extends UIKit.Component<NavbarProps> {
    type: string;
    events: string[];
    options: string[];
    render(): JSX.Element;
}
