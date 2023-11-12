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
  public profileData: any; // Profile Data from API
  public showProfile: boolean = false;
  public loading: boolean = false;

  /**
   * @description Call Github API for getting github user data
   */
  searchGithubUsers() {
    // Toastr for showcasing warnings
    if (this.githubUsername === '') {
      this.toastr.warning('Please enter a username!', 'Warning');
    } else {
      this.loading = true;
      this.apiService.getUser(this.githubUsername)?.subscribe(
        (res) => {
          this.profileData = res;
          setTimeout(() => {
            this.loading = false;
            this.showProfile = true;
          }, 1000);
        },
        (error) => {
          this.loading = false;
          this.toastr.error(
            'Unable to fetch user from Github!',
            'Error Message'
          );
        }
      );
    }
  }
}
