import PostServices from '@/services/post/post.services';
import { useQuery } from '@tanstack/react-query';

export const useBlogPost = ({
  title,
  page,
  per_page,
}: {
  title?: string;
  page?: string;
  per_page?: string;
}) => {
  return useQuery({
    queryKey: ['get-all-posts-id-key'],
    queryFn: () => PostServices.getAllPosts({ title, page, per_page }),
  });
};
