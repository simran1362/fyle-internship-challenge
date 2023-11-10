import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repoview',
  templateUrl: './repoview.component.html',
  styleUrls: ['./repoview.component.scss'],
})
export class RepoviewComponent {
  constructor(private apiService: ApiService) {}
  @Input() data: any;
  tagData: any;
  ngOnInit() {
    this.getTagData(this.data.tags_url);
  }

  getTagData(path: string) {
    this.apiService.getData(path).subscribe(
      (data) => {
        console.log(data, 'tagData');
        this.tagData = data;
      },
      (error) => {
        // alert(error);
      }
    );
  }
}
