import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private apiService: ApiService) {}
  githubUsername = '';
  public dashboardData: any;
  public showDashboard: boolean = false;
  ngOnInit() {}
  public loading: boolean = false;
  searchGithubUsers() {
    this.loading = true;
    if (this.githubUsername) {
      console.log(this.githubUsername);
      this.apiService.getUser(this.githubUsername).subscribe((res) => {
        console.log(res);
        this.dashboardData = res;
        setTimeout(() => {
          this.loading = false;
          this.showDashboard = true;
        },1000)
      },(error) => {
        alert(error);
        this.loading = false;
      })
    }
  }
}
