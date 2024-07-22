// blogPostList.test.js
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BlogPostList } from '../src/components/BlogPostList';

describe('BlogPostList', () => {
  it('renders a list of blog posts', async () => {
    const blogPosts = [
      { id: 1, title: 'Post 1', content: 'This is post 1' },
      { id: 2, title: 'Post 2', content: 'This is post 2' },
      { id: 3, title: 'Post 3', content: 'This is post 3' },
    ];

    const { getByText } = render(BlogPostList, {
      props: { blogPosts },
    });

    await waitFor(() => {
      expect(getByText('Post 1')).toBeInTheDocument();
      expect(getByText('Post 2')).toBeInTheDocument();
      expect(getByText('Post 3')).toBeInTheDocument();
    });
  });

  it('calls the `loadMore` function when the "Load more" button is clicked', async () => {
    const loadMore = vi.fn();
    const blogPosts = [
      { id: 1, title: 'Post 1', content: 'This is post 1' },
      { id: 2, title: 'Post 2', content: 'This is post 2' },
    ];

    const { getByText } = render(BlogPostList, {
      props: { blogPosts, loadMore },
    });

    const loadMoreButton = getByText('Load more');
    await fireEvent.click(loadMoreButton);

    expect(loadMore).toHaveBeenCalledTimes(1);
  });

  it('renders a message when there are no blog posts', async () => {
    const { getByText } = render(BlogPostList, {
      props: { blogPosts: [] },
    });

    expect(getByText('No blog posts found')).toBeInTheDocument();
  });

  it('renders a loading message when `loading` is true', async () => {
    const { getByText } = render(BlogPostList, {
      props: { loading: true },
    });

    expect(getByText('Loading...')).toBeInTheDocument();
  });
});