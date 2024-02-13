import UserService from '@/services/user/user-services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useUserDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-user-id-key'],
    mutationFn: (userId: string) => UserService.deleteUser(userId),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['get-all-users-id-key'] });
    },
  });
};

export const useUserQueryGetMutation = ({
  page,
  per_page,
}: {
  page?: string;
  per_page?: string;
}) => {
  return useQuery({
    queryKey: ['get-all-users-id-key'],
    queryFn: () => UserService.getAllUsers(page, per_page),
  });
};
