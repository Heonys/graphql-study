import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/utils/querykeys';
import { createKeypad } from '@/api';
import type { CreateKeypad } from '@/types';
import { AxiosError } from 'axios';

export default function useKeypad(id: number) {
  return useQuery<CreateKeypad, AxiosError>({
    queryKey: [...QueryKeys.keypad(), id],
    queryFn: createKeypad,
  });
}
