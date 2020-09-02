import { Component, OnInit } from '@angular/core';
import {videoData} from "../../video-data";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videoList = videoData;

  constructor() { }

  ngOnInit(): void {
  }

}
