import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-timeslot',
  templateUrl: './view-timeslot.component.html',
  styleUrls: ['./view-timeslot.component.css']
})
export class ViewTimeslotComponent implements OnInit {

  typeKey: string;
  stateKey: string;
  types = [];
  states = [];
  days = {
    'sun': false,
    'mon': false,
    'tue': false,
    'wed': false,
    'thu': false,
    'fri': false,
    'sat': false
  };
  showCardBody = true;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    // this.getAllTypes();
    // this.getrefObject();
    // console.log(this.days);
  }

  setShowCardBody() {
    this.showCardBody = !this.showCardBody;
  }

  getAllTypes() {
    this.appService.getType()
      .subscribe(
        (response) => {
          let data: any = response;
          for (let obj of data) {
            this.types.push(obj.name);
          }
          this.typeKey = this.types[0];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAllStates(refObject) {
    this.appService.getState(refObject)
      .subscribe(
        (response) => {
          console.log(response);
          let states: any = response;
          for (let state of states) {
            this.states.push(state.name);
          }
          this.stateKey = this.states[0];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getrefObject() {
    this.appService.getRefObjectUri()
      .subscribe(
        (response) => {
          const refObject = response[0];
          this.getAllStates(refObject);
        },
        (error) => {
          console.log(error);
        })
  }



}
