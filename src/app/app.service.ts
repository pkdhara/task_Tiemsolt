import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  headers;
  typeUrl = "http://localhost:8080/co-services/services/rest/typeservice/types?principalId=beardswo&context.applicationId=angular1x.timeslot&context.moduleId=co&context.screenId=timeslot&refObjectUri=http://student.kuali.org/wsdl/scheduling/TimeSlotInfo";
  refObjectUrl = "http://localhost:8080/co-services/services/rest/stateservice/lifecycles/keys?principalId=beardswo&context.applicationId=angular1x.timeslot&context.moduleId=co&context.screenId=timeslotcreate&refobjectUri=http:%2F%2Fstudent.kuali.org%2Fwsdl%2Fscheduling%2FTimeSlotInfo";
  stateUrl = "http://localhost:8080/co-services/services/rest/stateservice/states?principalId=beardswo";
  constructor(private httpClient: HttpClient) {
  }

  getType() {
    return this.httpClient.get(this.typeUrl);
  }

  getRefObjectUri() {
    return this.httpClient.get(this.refObjectUrl);
  }

  getState(refObject) {
    return this.httpClient.get(this.stateUrl + "&lifecycleKey=" + refObject);       
  }
}
