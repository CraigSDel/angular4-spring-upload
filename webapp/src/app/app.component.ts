import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private http: Http;
  private selectedFile: File;

  constructor(http: Http) {
    this.http = http;
  }

  private _title = 'File Uploading with Spring';

  get title(): string {
    return this._title;
  }

  setFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {

    if (this.selectedFile) {
      const formData = new FormData();
      console.log(this.selectedFile + " " + this.selectedFile.name);
      formData.append('file', this.selectedFile, this.selectedFile.name);
      console.log(this.selectedFile);
      console.log(formData);
      this.http.post('http://localhost:8080/file/upload', formData)
        .subscribe((response) => console.log(response));
    }

    // if (this.selectedFile) {
    //   this.http.post('http://localhost:8080/file/upload', this.selectedFile).subscribe((response) => console.log(response));
    // }
  }
}
