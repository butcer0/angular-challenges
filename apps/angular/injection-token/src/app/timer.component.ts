import { Component, Inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
// import { ActivatedRoute } from "@angular/router";
import { TIMER_INTERVAL } from './injection-tokens/timer-interval';

@Component({
  selector: 'timer',
  standalone: true,
  template: `
    Timer running {{ timer() }}
  `,
})
export class TimerComponent {
  timer: Signal<number | undefined> = toSignal(interval(0));

  constructor(@Inject(TIMER_INTERVAL) private timerInterval: number) {
    console.info(`timer set to: ${timerInterval}`);
    this.timer = toSignal(interval(timerInterval));
  }

  // constructor(private route: ActivatedRoute) {
  // }
  // ngOnInit() {
  //   const timerTime = this.route.snapshot.data['timer'];
  //   this.timer = toSignal(interval(timerTime));
  // }
}
