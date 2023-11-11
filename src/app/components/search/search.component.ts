import { Component, NgModule } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  githubUsername = '';
  public profileData: any;
  public showDashboard: boolean = false;
  public loading: boolean = false;

  ngOnInit() {
    // Your initialization code here
  }

  searchGithubUsers() {
    if (this.githubUsername === "") {
      this.toastr.warning('Please enter a username!', 'Warning');
    }
    else {
      this.loading = true;
      this.apiService.getUser(this.githubUsername).subscribe(
        (res) => {
          this.profileData = res;
          setTimeout(() => {
            this.loading = false;
            this.showDashboard = true;
          }, 1000);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Unable to fetch user from Github!', 'Error Message');
        }
      );
    }
  }
}
