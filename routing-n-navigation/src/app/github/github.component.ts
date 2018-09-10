import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';
// import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
// import { Observable } from 'rxjs';



@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  githubs: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubService) {
  }

  ngOnInit() {

    // let obs = combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(combined => {
    //   let username = combined[0].get('username');
    //   let page = combined[1].get('page');
    // });

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combined => {
      let username = combined[0].get('username');
      let page = combined[1].get('page');

      return this.service.getAll();
    })).subscribe(githubs => this.githubs = githubs);

 
    // this.route.paramMap.subscribe(params => {
      
    // });
    // this.route.snapshot.paramMap.get('username');

    // obs.subscribe();

    // this.route.snapshot.queryParamMap.get('page')

    // this.service.getAll().subscribe(githubs => this.githubs = githubs);
  }

}

