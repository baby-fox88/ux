import { ObserverLocator, TaskQueue } from 'aurelia-framework';
import { UxPositioningFactory } from '@aurelia-ux/positioning';
import { StyleEngine, UxInputComponent, InputVariant } from '@aurelia-ux/core';
import { UxSelectTheme } from './ux-select-theme';
import { UxOptGroupElement } from './ux-optgroup';
import { UxOptionElement } from './ux-option';
import '@aurelia-ux/core/components/ux-input-component.css';
import '@aurelia-ux/core/components/ux-input-component--outline.css';
import { UxDefaultSelectConfiguration } from './ux-default-select-configuration';
declare module './ux-option' {
    interface UxOption {
        uxSelect: UxSelect;
    }
}
declare module './ux-optgroup' {
    interface UxOptGroup {
        uxSelect: UxSelect;
    }
}
export interface UxSelectElement<T = any> extends HTMLElement {
    options: UxOptionElement[];
    matcher(a: any, b: any): boolean;
    value: T;
}
export interface UxOptionContainer extends HTMLElement {
    children: HTMLCollectionOf<UxOptGroupElement | UxOptionElement>;
}
export declare class UxSelect implements UxInputComponent {
    readonly element: UxSelectElement;
    private styleEngine;
    private observerLocator;
    private taskQueue;
    private positioningFactory;
    private positioning;
    private selectedOption;
    private focusedUxOption;
    private winEvents;
    theme: UxSelectTheme;
    autofocus: boolean | string;
    disabled: boolean | string;
    multiple: boolean | string;
    label: string;
    placeholder: string;
    variant: InputVariant;
    dense: any;
    value: any;
    displayValue: string;
    expanded: boolean;
    readonly optionWrapperEl: HTMLElement;
    readonly optionCtEl: UxOptionContainer;
    constructor(element: UxSelectElement, styleEngine: StyleEngine, observerLocator: ObserverLocator, taskQueue: TaskQueue, defaultConfiguration: UxDefaultSelectConfiguration, positioningFactory: UxPositioningFactory);
    bind(): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    private resolveDisplayValue;
    private ignoreSelectEvent;
    private synchronizeOptions;
    private synchronizeValue;
    private moveToBody;
    private moveToElement;
    private setupListAnchor;
    private unsetupListAnchor;
    private onKeyboardSelect;
    call(): void;
    getValue(): any;
    private arrayObserver;
    setValue(newValue: any): void;
    private isExpanding;
    expand(): void;
    private isCollapsing;
    collapse(): void;
    private setFocusedOption;
    moveSelectedIndex(offset: number): void;
    onTriggerClick(): void;
    onBlur(): void;
    onSelect(e: CustomEvent): void;
    onKeyDown(event: KeyboardEvent): true | undefined;
    themeChanged(newValue: UxSelectTheme): void;
    multipleChanged(newValue: boolean | string, oldValue: boolean | string): void;
    variantChanged(newValue: string): void;
    get placeholderMode(): boolean;
    get options(): UxOptionElement[];
    getOptions(): UxOptionElement[];
    get isMultiple(): boolean;
    get isDisabled(): boolean;
}
