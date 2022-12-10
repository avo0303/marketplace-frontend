import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const Animations = {
  menuToggle: trigger('menuToggle', [
    state(
      'close',
      style({ visibility: 'hidden', opacity: 0, 'margin-top': -15 })
    ),
    state(
      'open',
      style({ visibility: 'visible', opacity: 1, 'margin-top': 0 })
    ),
    transition('open <=> close', [animate(200)]),
  ]),
};
