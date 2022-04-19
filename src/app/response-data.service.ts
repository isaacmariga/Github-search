// import { Injectable } from '@angular/core';
// import {HttpClient} from'@angular/common/http'
// import { User } from './class/user';
// import { environment } from 'src/environments/environment';
// import { Repository } from './class/repository';
// import { lastValueFrom} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ResponseDataService {
//     userGottenDetails: User;
//     userRepositories: Repository;
  

//   constructor(private http: HttpClient) { 
//     this.userGottenDetails = new User(
//       '',
//       '',
//       '',
//       '',
//       '',
//       '',
//       '',
//       '',
//       0,
//       0,
//       0,
//       new Date(),
//       ''
//     );
//     // empty repository
//     this.userRepositories = new Repository('', '', '', new Date(), '');
//   }

//   // get user
//   getUserRequest(githubUsername) {
//     interface ApiUserResponse {
//       name: string;
//       login: string;
//       avatar_url: string;
//       blog: string;
//       public_repos: number;
//       html_url: string;
//       location: string;
//       bio: string;
//       twitter_username: string;
//       _repos: number;
//       followers: number;
//       following: number;
//       created_at: Date;
//       company?: string;
//     }
//     let userPromise = new Promise<void>((resolve, reject) =>
//       this.http
//         .get<ApiUserResponse>(
//           environment.userUrl +
//             '/' +
//             githubUsername)
//         .lastValueFrom(userPromise)
//         .then(
//           (response) => {
//             this.userGottenDetails = response;
//             resolve();
//           },
//           (error) => {
//             reject(error);
//             console.log(error);
//           }
//         )
//     );
//     return userPromise;
//   }

//   // get user repositories
//   getUserRepositoryRequest(githubUsername) {
//     // the interface
//     interface ApiUserRepositoryResponse {
//       name: string;
//       html_url: string;
//       description: string;
//       created_at: Date;
//       language?: string;
//     }

//     let UserRepositoryPromise = new Promise<void>((resolve, reject) => {
//       this.http
//         .get<ApiUserRepositoryResponse>(
//           environment.userUrl +
//             '/' +
//             githubUsername
//         )
//         .toPromise()
//         .then(
//           (response) => {
//             this.userRepositories = response;
//             resolve();
//           },
//           (error) => {
//             reject(error);
//             console.log(error);
//           }
//         );
//     });
//     return UserRepositoryPromise;
//   }
//   }
// }
