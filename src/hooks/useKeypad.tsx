import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/utils/querykeys';
import { createKeypad } from '@/api';
import type { CreateKeypad } from '@/types';

export default function useKeypad(id: number) {
  return useQuery<CreateKeypad>({
    queryKey: [...QueryKeys.keypad(), id],
    queryFn: createKeypad,
  });
}
