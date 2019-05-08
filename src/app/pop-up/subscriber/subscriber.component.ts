import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import * as OT from '@opentok/client';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})

export class SubscriberComponent implements AfterViewInit {
  @ViewChild('subscriberDiv') subscriberDiv: ElementRef;
  @Input() session: OT.Session;
  @Input() stream: OT.Stream;

  constructor() {
    // const subscriber1 = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, (err) => {
    //   if (err) {
    //     alert(err.message);
    //   }
    // });
  }

  ngAfterViewInit() {
    const subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }

  ngOnDestroy() {
    // this.session.unsubscribe();
  }
}
