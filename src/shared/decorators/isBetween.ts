export interface IRange {
  min?: number;
  max?: number;
  strict?: boolean;
}

export function isBetween({ min, max, strict }: IRange = { strict: false }) {
  return (target, prop, newVal) => {
    let isValid = true;

    if (min !== undefined && ((newVal < min) && strict) || (newVal <= min && !strict)) isValid = false;
    if (max !== undefined && ((newVal > max) && strict) || (newVal >= min && !strict)) isValid = false;

    if (isValid) return;


    if (min !== undefined && max !== undefined) {
      console.error(
        `${target.constructor.name}: @Input '${prop}' is expected to be ${strict ? 'strictly' : ''} between ${min} and ${max}, but value ${newVal} was provided`
      );
      return;
    }

    if (min !== undefined) {
      console.error(
        `${target.constructor.name}: @Input '${prop}' is expected to be ${strict ? 'strictly' : ''} lower than ${min}, but value ${newVal} was provided`
      );
      return;
    }

    if (max !== undefined) {
      console.error(
        `${target.constructor.name}: @Input '${prop}' is expected to be ${strict ? 'strictly' : ''} bigger than ${min}, but value ${newVal} was provided`
      );
      return;
    }
  }
}
