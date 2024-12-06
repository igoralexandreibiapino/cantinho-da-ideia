import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
 post = {id: 1, title: 'teste', body: 'dasdas', userId: 1234}
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Erro ao carregar postagens:', error);
      }
    );
  }

  deletePost(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(
      () => {
        this.posts = this.posts.filter((post) => post.id !== id);
        alert('Postagem excluída com sucesso!');
      },
      (error) => {
        console.error('Erro ao excluir postagem:', error);
      }
    );
  }
}
