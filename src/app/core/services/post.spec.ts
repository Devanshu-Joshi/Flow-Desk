import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post';
import { Post } from '../models/Post';
import { environment } from '../../../../environments/environment';

describe('PostService', () => {
    let service: PostService;
    let httpMock: HttpTestingController;

    const mockPosts: Post[] = [
        { id: 1, title: 'Post 1', body: 'Body 1' } as Post,
        { id: 2, title: 'Post 2', body: 'Body 2' } as Post
    ];

    const mockPost: Post = {
        id: 1,
        title: 'Post 1',
        body: 'Body 1'
    } as Post;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostService]
        });

        service = TestBed.inject(PostService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all posts', () => {
        service.getPosts().subscribe((posts) => {
            expect(posts.length).toBe(2);
            expect(posts).toEqual(mockPosts);
        });

        const req = httpMock.expectOne(environment.API_URL);
        expect(req.request.method).toBe('GET');

        req.flush(mockPosts);
    });

    it('should fetch a single post by id', () => {
        const postId = 1;

        service.getPost(postId).subscribe((post) => {
            expect(post).toEqual(mockPost);
            expect(post.id).toBe(postId);
        });

        const req = httpMock.expectOne(`${environment.API_URL}/${postId}`);
        expect(req.request.method).toBe('GET');

        req.flush(mockPost);
    });
});