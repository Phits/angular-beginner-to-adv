import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  private year;
  private month;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
  }

  submit() {
    this.router.navigate([''], {})
  }

}
