import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private apiService: ApiService) {}
  @Input() profileData: any;
  currentPage: number = 1;
  totalItems: number = 0;
  @Input() pageSize: number = 10;
  totalPages: number = 1;
  repoData: any;
  twitterUrl: string = '';
  pageOptions: any = [10, 50, 100];
  isOpen = false;
  ngOnInit() {
    this.getRepoData(this.profileData.repos_url);
    this.totalItems = this.profileData.public_repos;
    this.totalPages = Math.ceil(
      this.totalItems / this.pageSize >= 0 ? this.totalItems / this.pageSize : 1
    );
    this.twitterUrl = `https://twitter.com/${this.profileData.twitter_username}`;
  }
  getRepoData(path: string) {
    this.apiService
      .getData(path + `?page=${this.currentPage}&per_page=${this.pageSize}`)
      .subscribe(
        (data: any) => {
          console.log(data, 'repoData');
          this.repoData = data;
          this.scrollToTop();
        },
        (error) => {
          alert(error);
        }
      );
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getRepoData(this.profileData.repos_url);
      console.log(this.currentPage);
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getRepoData(this.profileData.repos_url);
    }
  }
  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index + 1);
  }
  setPage(page: number) {
    this.currentPage = page;
    this.getRepoData(this.profileData.repos_url);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  setPageSize(size: number) {
    this.pageSize = size;
    this.getRepoData(this.profileData.repos_url);
    this.currentPage = 1;
    this.totalPages = Math.ceil(
      this.totalItems / this.pageSize >= 0 ? this.totalItems / this.pageSize : 1
    );
    this.handleDropDown();
  }
  handleDropDown() {
    this.isOpen = !this.isOpen;
  }
}
