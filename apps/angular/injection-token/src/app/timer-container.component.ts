import { Component, Inject } from '@angular/core';
import { TimerComponent } from './timer.component';
// import { ActivatedRoute } from "@angular/router";
import { TIMER_INTERVAL } from './injection-tokens/timer-interval';
// import { toSignal } from "@angular/core/rxjs-interop";
// import { interval } from "rxjs";
@Component({
  selector: 'timer-container',
  standalone: true,
  imports: [TimerComponent],
  template: `
    <div class="flex gap-2">
      Timer container:
      <p class="italic">(timer is {{ timerInterval }}s)</p>
    </div>
    <timer />
  `,
  host: {
    class: 'border rounded-md flex p-4 gap-10',
  },
})
export class TimerContainerComponent {
  constructor(@Inject(TIMER_INTERVAL) public timerInterval: number) {}
}
