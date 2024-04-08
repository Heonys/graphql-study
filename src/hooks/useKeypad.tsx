import { CreateKeypad, createKeypad } from '@/api';
import { QueryKeys } from '@/utils/querykeys';
import { useQuery } from '@tanstack/react-query';

export default function useKeypad(id: number) {
  return useQuery<CreateKeypad>({
    queryKey: [...QueryKeys.keypad(), id],
    queryFn: createKeypad,
  });
}
