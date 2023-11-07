import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(
    private apiService: ApiService,
  ){}
  githubUsername= "";
  public getUserResponse = null
  ngOnInit() {
    
  }
  searchGithubUsers() {
    console.log(this.githubUsername);
    this.apiService.getUser(this.githubUsername).subscribe((res) => {
      console.log(res)
    })
  }
}
