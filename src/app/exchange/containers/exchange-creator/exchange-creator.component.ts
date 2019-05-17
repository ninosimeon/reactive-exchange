import {Component, OnInit} from '@angular/core';
import {ExchangeService} from '../../exchange.service';

@Component({
  selector: 'app-exchange-creator',
  templateUrl: './exchange-creator.component.html'
})
export class ExchangeCreatorComponent implements OnInit {
  public exchanged: number;

  constructor(private exchangeService: ExchangeService) {
    this.exchanged = 0;
  }

  ngOnInit() {
  }

  public exchanger(event: any): void {
    this.exchanged = this.exchangeService.exchange(event.to_convert, 'USD');
  }

}
