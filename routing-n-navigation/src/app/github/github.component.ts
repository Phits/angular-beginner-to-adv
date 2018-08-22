import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  githubs: any;

  constructor(private service: GithubService) { 

  }

  ngOnInit() {
    this.service.getAll().subscribe(githubs => this.githubs = githubs);
  }

}

