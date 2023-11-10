import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}
  @Input() dashboardData: any;
  repoData: any;
  ngOnInit() {
    this.getRepoData(this.dashboardData.repos_url);
  }
  getRepoData(path: string) {
    this.apiService.getData(path).subscribe(
      (data) => {
        console.log(data, 'repoData');
        this.repoData = data;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
