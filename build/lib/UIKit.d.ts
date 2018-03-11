/// <reference types="react" />
import * as React from 'react';
export declare namespace UIKit {
    function Compose({as, children, ...props}: {
        as: string;
        children: JSX.Element | any;
        props: object;
    }): any;
    interface iComponent {
        render: () => JSX.Element | any;
        type?: string;
        events?: string[];
        options?: string[];
        props: object;
        refs?: object;
        state: object;
    }
    interface Options {
    }
    interface Events {
        onBeforeShow?: () => boolean;
        onShow?: () => void;
        onShown?: () => void;
        onBeforeHide?: () => boolean;
        onHide?: () => void;
        onHidden?: () => void;
        onClick?: (e: React.SyntheticEvent<HTMLElement>) => boolean | void;
    }
    interface Props<T = {}> extends React.ClassAttributes<T>, Events {
        key?: string;
        className?: string;
        primary?: boolean;
        secondary?: boolean;
        danger?: boolean;
        success?: boolean;
        warning?: boolean;
        duration?: number;
        as?: JSX.Element | string;
    }
    class Component<P = {}, S = {}> extends React.Component<P, S> implements iComponent {
        type: string;
        options: string[];
        events: string[];
        pushEvent(eventName: string, e?: React.SyntheticEvent<HTMLElement> | any): void;
        pushEvents(eventNames: string[]): void;
    }
}
