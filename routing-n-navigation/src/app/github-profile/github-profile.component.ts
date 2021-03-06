import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1, order: 'newest'
      }
    })
  }

  ngOnInit() {
    // let username = this.route.snapshot.paramMap.get('username');
    // console.log("username is ", username);

    // this.route.paramMap.subscribe(params => {
    //   console.log('params is', params);
    //   let username = +params.get('username');
    //   console.log("username is ", username);
    // })
  }


}
