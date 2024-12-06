import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  post: any = { title: '', body: '', userId: null };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.params['id'];
    if (postId) {
      this.isEdit = true;
      this.http
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .subscribe((data: any) => {
          this.post = data;
        });
    }
  }

  savePost() {
    const request = this.isEdit
      ? this.http.put(
          `https://jsonplaceholder.typicode.com/posts/${this.post.id}`,
          this.post
        )
      : this.http.post('https://jsonplaceholder.typicode.com/posts', this.post);

    request.subscribe(() => {
      alert('Postagem salva com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
