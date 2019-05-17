import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { OpentokService } from '../../service/Opentok.service';

const publish = () => {

};

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})

export class PublisherComponent implements AfterViewInit {
  @ViewChild('publisherDiv') publisherDiv: ElementRef;
  @Input() session: OT.Session;
  publisher: OT.Publisher;
  publishing: Boolean;
  @Input() alreadyPublishing: Boolean = false;

  constructor(private opentokService: OpentokService) {
    this.publishing = false;
  }

  ngOnInit() {
    console.log(1)
  }

  ngAfterViewInit() {
    if(!this.alreadyPublishing) {
      const OT = this.opentokService.getOT();
      this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, {insertMode: 'append'});

      if (this.session) {
        if (this.session['isConnected']()) {
          this.publish();
        }
        this.session.on('sessionConnected', () => this.publish());
      }
    }
  }

  cycleVideo() {
    this.publisher.cycleVideo();
  }

  publish() {
    this.session.publish(this.publisher, (err) => {
      if (err) {
        alert(err.message);
      } else {
        this.publishing = true;
      }
    });
  }

}
