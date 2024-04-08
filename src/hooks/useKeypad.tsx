import { CreateKeypad, createKeypad } from '@/api';
import { QueryKeys } from '@/utils/querykeys';
import { useQuery } from '@tanstack/react-query';

export default function useKeypad() {
  return useQuery<CreateKeypad>({
    queryKey: QueryKeys.keypad,
    queryFn: createKeypad,
  });
}
