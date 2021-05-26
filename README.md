# BS4 Helper v1.0.2

Added Scroll Indicators, Shrinking Progress Bars and Timer Bars.

Way to use:

Shrinking Progress Bars:
Replace `data-progress="grow"` with `data-progress="shrink"` and (if you have added this) `data-max-width` to `data-min-width`.

Timer Bars:
Replace `data-progress="grow"` with `data-progress="timer"` and add `data-time=[time in seconds]` and `toggle-btn=[toggler button id]`. If you want to show the amount of time left in a label, add `show-label=[label id]`. Add the `.timer-btn` class to the timer toggler. Also, add the `.timer-label` class to the timer label.

Scroll Indicators:
Add the `.scroll-container` class to the Scroll Indicator Container and the `.scroll-indicator` class to the Scroll Indicator.

# BS4 Helper v1.0.1

Added `.float-left` and `.float-right` classes. You can create beautiful looking inputs using `.input-group-icon`, `.input-group-icon-pill`, `.input`, and `input-toggle-btn` classes.

# BS4 Helper v1.0.0

## jQuery Initialization

Without BS4 Helper you have to initialize elements like tooltips yourself with `jQuery`. But, BS4 Helper does all that initialization for you. Just import it by following this [link](https://bhogi7589.github.io/bs4-helper)!

### jQuery Additions

BS4 Helper also adds and initializes components like Growing Progress Bars. Just add `data-progress="grow"` and `data-max-width=[width relative to parent in percentage without % symbol]`(optional) to a `<div>` element with `class="progress-bar"`. If you want to set transition, add `data-transition=[milliseconds]` too. Add `show-percentage="true"` to show the percentage.

**Note: BS4 Helper only allows *one* growing progress bar per page.**

## Rotated Elements

BS4 Helper also adds classes for rotating elements by different angles. Just include `class="rotate-[measure of angle]"`.

## Additional Styling

BS4 Helper also adds additional styling properties to Bootstrap 4 classes like `.display-1,2,3,4`.

## New Classes

BS4 Helper also adds new classes to Bootstrap 4 like `.heading`, `.heading-large`, `.heading-medium`, `heading-small`, `.heading-red`, `heading-orange` etc.

#### Warning! This framework is an extension to Bootstrap 4, so, without BS4, this framework may not work as expected!
