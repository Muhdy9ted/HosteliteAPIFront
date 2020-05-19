import { Component, OnInit } from '@angular/core';
import { Hostel } from 'src/app/Shared/Models/hostel.model';
import { HostelService } from 'src/app/Shared/Services/hostel.service';
import { AlertifyService } from 'src/app/Shared/Services/alertify.service';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {

  hostels: Hostel[];

  constructor( private hostelService: HostelService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadHostels();
  }

  loadHostels() {
    this.hostelService.getHostels().subscribe((hostels: Hostel[]) => {
      this.hostels = hostels;
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }
}
