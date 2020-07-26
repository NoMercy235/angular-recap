const HIDDEN_PROP = '__validators';

export function validateInput(...validators: Function[]) {
  return function (target: any, prop: string) {
    if (!target[HIDDEN_PROP]) target[HIDDEN_PROP] = {};

    Object.defineProperty(target, prop, {
      get() {
        return this[HIDDEN_PROP][prop];
      },
      set: function (newVal) {
        this[HIDDEN_PROP][prop] = newVal;
        validators.forEach(validator => validator(target, prop, newVal));
      },
    });
  }
}
