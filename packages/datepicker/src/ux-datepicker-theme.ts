import { swatches, UxTheme } from '@aurelia-ux/core';

export class UxDatepickerTheme implements UxTheme {
  public themeKey = 'datepicker';

  public foreground: string = '#333';
  public overlay: string = 'rgba(0, 0, 0, 0.25)';
  public calendarIcon: string = 'currentColor';

  // datepicker modal
  public headerForeground: string = 'var(--ux-design--primary-foreground, #FFF)';
  public headerBackground: string = 'var(--ux-design--primary, #3F51B5)';

  // calendar properties
  public weekdayForeground: string = swatches.grey.p600;
  public selectedDayForeground: string = 'var(--ux-design--accent-foreground, #FFF)';
  public selectedDayBackground: string = 'var(--ux-design--accent, #FF4081)';
  public outOfRangeForeground: string = swatches.grey.p600;
}
