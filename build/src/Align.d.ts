/// <reference types="react" />
import * as React from 'react';
import { UIKit } from '../lib/UIKit';
export declare namespace Align {
    interface Props extends UIKit.Props<Component> {
        size?: string;
        responsive?: object;
        small?: string;
        medium?: string;
        big?: string;
        large?: string;
    }
    class Component extends React.Component<Props> {
        type: string;
        private readonly sizes;
        render(): JSX.Element;
    }
    class Left extends Component {
        readonly type: string;
    }
    class Right extends Component {
        readonly type: string;
    }
    class Center extends Component {
        readonly type: string;
    }
}
